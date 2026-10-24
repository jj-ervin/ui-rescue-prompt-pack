# UI Rescue test result — Site A: Governance Commons

| Field | Value |
|---|---|
| Site identifier | A — Governance Commons homepage |
| Baseline commit | `a6d29fb650f4a72c7ffdd980bd4deba4c26d7c0e` |
| Test date / reviewer | 2026-10-24 / Codex self-review |
| Browser / OS | Google Chrome 156.0.8078.47 / Windows 10.0.26200.0 |
| Viewports / zoom | 390×844, 768×1024, 1440×1000 / 100%, DPR 1 |
| Model | OpenAI Codex model; exact backend version was not exposed |
| Control | Ordinary instruction from `TEST-PLAN.md` |
| Rescue | Prompt 01, repository version at test time |

## Scorecard

Ratings are the implementing reviewer's structured assessment, not an independent or blinded panel score.

| Dimension | Weight | Control rating | Control points | Rescue rating | Rescue points | Evidence |
|---|---:|---:|---:|---:|---:|---|
| Evidence-specific observations | 25 | 3 | 15 | 5 | 25 | Rescue cites exact viewport behavior and source selectors. |
| Actionable corrections | 25 | 3 | 15 | 5 | 25 | Rescue pairs each finding with scope and verification. |
| Visual judgment | 20 | 3 | 12 | 4 | 16 | Rescue explicitly preserves the distinctive desktop composition. |
| Functionality preservation | 15 | 3 | 9 | 5 | 15 | Rescue distinguishes hidden-at-rest from keyboard-operable links and avoids unauthorized code. |
| Responsive / accessibility coverage | 15 | 2 | 6 | 5 | 15 | Rescue tests three viewports and keyboard order and identifies the absent skip link. |
| **Total** | **100** |  | **57** |  | **96** | **Rescue +39** |

The improvement exceeds the 15-point experimental threshold. It does not establish market demand or independent prompt superiority.

## Actual checks

- `npm ci`: completed; 185 packages audited, zero reported vulnerabilities.
- `npm run build`: passed; Astro 7.4.2 built 28 pages.
- Homepage-local links and referenced assets: HTTP 200 from the production preview.
- Heading/form structure: one `h1`, no forms.
- Keyboard: home, all seven navigation links, GitHub, and both hero actions were reachable; the horizontal nav scrolled as focus advanced.
- Browser console: no warnings or errors recorded on the homepage.
- Responsive capture: true CSS viewports, and document `scrollWidth` matched 390, 768, and 1440.
- External GitHub links: not requested; unverified.

## Screenshots

- [390×844](screenshots/gc-home-390x844.png)
- [768×1024](screenshots/gc-home-768x1024.png)
- [1440×1000](screenshots/gc-home-1440x1000.png)

## Decision

**Continue with the prompt-kit evidence; do not implement Governance Commons changes in this experiment.** The audit produced more specific and safer recommendations than the control. The site repository remained clean on `main`; production, architecture, and governance claims were untouched.

## Limitations

- Control and Rescue were produced by the same Codex session rather than fresh isolated conversations; context leakage cannot be ruled out.
- The reviewer also authored the score, so the scoring is not independent or blinded.
- Screenshots cover the first viewport, not full-page visual diffs.
- No screen reader, automated accessibility engine, contrast sampler over the photograph, 200% zoom, or user study was run.
- No claim of WCAG conformance, production behavior, or user comprehension is made.
