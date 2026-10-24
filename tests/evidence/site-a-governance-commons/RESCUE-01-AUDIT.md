# Site A Rescue 01 audit — Governance Commons

## Inspected evidence

- Page: homepage only, served from the local Astro production build
- Viewports: 390×844, 768×1024, and 1440×1000 at DPR 1 and 100% browser zoom
- Source: `site/src/pages/index.astro`, `site/src/layouts/BaseLayout.astro`, and `site/src/styles/global.css`
- Interactions: keyboard focus through the header and hero links; all local homepage links requested from the production build
- Not inspected: screen-reader output, 200% zoom, reduced-motion rendering, external GitHub destinations, other pages visually, or real-user comprehension

## Findings

### 1. Mobile navigation has a discoverability problem, not an operability failure

- **Location / observed evidence:** At 390px, `.site-nav` measures 339px wide with 611px of scrollable content. Components, Commons, About, and Ecosystem are visible; Observatory is partly visible; Conformance and Adopt begin outside the viewport. Keyboard tabbing reaches all seven links and scrolls the navigation to expose the focused item.
- **Why it matters:** Pointer and touch users receive no visible cue that more primary destinations exist. Calling this “broken navigation” would overstate the evidence because keyboard access works and horizontal scrolling is intentional CSS behavior.
- **Recommendation:** Add a subtle, non-blocking overflow cue or revise mobile information architecture in a separately reviewed Governance Commons change. Do not introduce a menu or JavaScript only for this commercial test.
- **Priority:** Important.
- **Verification:** At 390px, confirm every link is discoverable by touch and keyboard, focus remains visible, and no new interaction traps are introduced.

### 2. The homepage lacks the skip link claimed by the earlier source brief

- **Location / observed evidence:** `BaseLayout.astro` begins the body with the fixed header; the first keyboard focus is the home brand, not a “Skip to content” control. The page otherwise has a single `main`, one `h1`, section headings, and labeled navigation.
- **Why it matters:** Keyboard users must traverse nine header links before reaching the first hero action.
- **Recommendation:** Add a visible-on-focus skip link as a separate reviewed accessibility correction. This is behavior-adjacent and was not authorized for this test branch.
- **Priority:** Important.
- **Verification:** Reload, press Tab once, activate the skip link, and confirm focus lands at main content below the fixed header at all three widths.

### 3. The mobile hero is long but remains coherent

- **Location / observed evidence:** At 390px the question wraps to seven lines; both calls to action remain in the first 844px capture, while the public-status panel begins below the fold. Text stays readable over the dark green/image composition.
- **Why it matters:** The headline creates a strong entry point, but it delays the status panel and consumes much of the first screen.
- **Recommendation:** Treat type-size or copy tightening as optional until a comprehension or task test shows a problem. Preserve the governance question and claim boundaries.
- **Priority:** Optional.
- **Verification:** Compare first-action visibility and headline readability without changing meaning.

### 4. The desktop split composition is distinctive and should be preserved

- **Location / observed evidence:** At 1440px the green copy field and human-centered image divide the hero cleanly; the status panel anchors the image side and both CTAs are visible.
- **Why it matters:** Replacing this with a generic centered hero would reduce brand recognition and weaken the human-accountability theme.
- **Recommendation:** Keep the large-screen composition, palette, image, and status panel as-is.
- **Priority:** Keep as-is.
- **Verification:** Visual comparison at 1440px after any unrelated change.

### 5. Lower-page card repetition is a review candidate, not a confirmed defect

- **Location / observed evidence:** The homepage repeatedly uses two- and three-column `.surface` grids for audiences, explanations, roles, public components, adoption, and community.
- **Why it matters:** Long-page scanning may become monotonous, but the first-screen captures and link checks do not demonstrate task failure.
- **Recommendation:** If future user testing shows poor scanning, vary information density or introduce section-level summaries without altering maturity or authority claims.
- **Priority:** Optional / unverified.
- **Verification:** Test representative findability tasks before and after any redesign.

## Five highest-impact actions, in order

1. Separately review and add a skip link.
2. Separately review a mobile-navigation discoverability cue.
3. Preserve the desktop hero composition and governance-language boundaries.
4. Test mobile comprehension before changing the headline.
5. Test lower-page findability before varying card layouts.

Items 1–2 could affect interaction behavior and require Governance Commons review. Items 3–5 are evidence or design-research actions. No Governance Commons files were modified.
