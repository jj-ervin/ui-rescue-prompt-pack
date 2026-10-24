import { spawn } from "node:child_process";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { tmpdir } from "node:os";

const [url, widthInput, heightInput, outputInput] = process.argv.slice(2);
const width = Number.parseInt(widthInput, 10);
const height = Number.parseInt(heightInput, 10);
const output = outputInput ? resolve(outputInput) : "";

if (!url || !Number.isSafeInteger(width) || !Number.isSafeInteger(height) || width < 1 || height < 1 || !output) {
  console.error("Usage: node capture-local-screenshot.mjs <url> <width> <height> <output.png>");
  process.exit(2);
}

const chromePath = process.env.CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const profilePath = await mkdtemp(resolve(tmpdir(), "ui-rescue-chrome-"));
const port = 9237;
const chrome = spawn(chromePath, [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  "--no-first-run",
  "--no-default-browser-check",
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${profilePath}`,
  "about:blank",
], { stdio: "ignore", windowsHide: true });

const wait = (milliseconds) => new Promise((resolveWait) => setTimeout(resolveWait, milliseconds));

async function waitForDebugger() {
  let lastError;
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/version`);
      if (response.ok) return;
    } catch (error) {
      lastError = error;
    }
    await wait(100);
  }
  throw new Error("Chrome DevTools endpoint did not become ready", { cause: lastError });
}

let socket;
try {
  await waitForDebugger();
  const targetResponse = await fetch(`http://127.0.0.1:${port}/json/new?${encodeURIComponent(url)}`, { method: "PUT" });
  if (!targetResponse.ok) throw new Error(`Could not create Chrome target: HTTP ${targetResponse.status}`);
  const target = await targetResponse.json();
  socket = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolveOpen, rejectOpen) => {
    socket.addEventListener("open", resolveOpen, { once: true });
    socket.addEventListener("error", rejectOpen, { once: true });
  });

  let nextId = 1;
  const pending = new Map();
  const events = new Map();
  socket.addEventListener("message", ({ data }) => {
    const message = JSON.parse(data);
    if (message.id && pending.has(message.id)) {
      const { resolve: resolveCall, reject: rejectCall } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) rejectCall(new Error(message.error.message));
      else resolveCall(message.result);
      return;
    }
    const waiters = events.get(message.method);
    if (waiters?.length) waiters.shift()(message.params);
  });

  const call = (method, params = {}) => new Promise((resolveCall, rejectCall) => {
    const id = nextId;
    nextId += 1;
    pending.set(id, { resolve: resolveCall, reject: rejectCall });
    socket.send(JSON.stringify({ id, method, params }));
  });
  const once = (method) => new Promise((resolveEvent) => {
    const waiters = events.get(method) || [];
    waiters.push(resolveEvent);
    events.set(method, waiters);
  });

  await call("Page.enable");
  await call("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: false });
  const loaded = once("Page.loadEventFired");
  await call("Page.navigate", { url });
  await loaded;
  await call("Runtime.evaluate", { expression: "document.fonts.ready", awaitPromise: true, returnByValue: true });
  await wait(150);

  const metrics = await call("Runtime.evaluate", {
    expression: "({width: innerWidth, height: innerHeight, scrollWidth: document.documentElement.scrollWidth})",
    returnByValue: true,
  });
  const measured = metrics.result.value;
  if (measured.width !== width || measured.height !== height) {
    throw new Error(`Viewport mismatch: requested ${width}x${height}, got ${measured.width}x${measured.height}`);
  }

  const screenshot = await call("Page.captureScreenshot", {
    format: "png",
    fromSurface: true,
    captureBeyondViewport: false,
  });
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, Buffer.from(screenshot.data, "base64"));
  console.log(`${output} ${measured.width}x${measured.height} scrollWidth=${measured.scrollWidth}`);
} finally {
  if (socket?.readyState === WebSocket.OPEN) socket.close();
  const exited = chrome.exitCode === null
    ? new Promise((resolveExit) => chrome.once("exit", resolveExit))
    : Promise.resolve();
  chrome.kill();
  await Promise.race([exited, wait(2000)]);
  for (let attempt = 0; attempt < 10; attempt += 1) {
    try {
      await rm(profilePath, { recursive: true, force: true });
      break;
    } catch (error) {
      if (attempt === 9) throw error;
      await wait(100);
    }
  }
}
