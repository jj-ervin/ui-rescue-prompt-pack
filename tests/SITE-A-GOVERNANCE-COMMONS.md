# Site A — Governance Commons: source-grounded test brief

**Status:** Local visual/browser test completed 2026-10-24; no Governance Commons files changed.
**Source repository:** https://github.com/governancecommons/governance-commons-www
**Source revision tested:** main, commit `a6d29fb650f4a72c7ffdd980bd4deba4c26d7c0e`
**Public URL:** https://governancecommons.org
**Date:** 2026-10-24

## Files inspected

- `site/src/pages/index.astro`
- `site/src/layouts/BaseLayout.astro`
- `site/src/styles/global.css`

## Observed in source (not claims about rendered appearance)

- The hero uses a background image, gradient scrim, large heading, two CTAs and a three-column status panel.
- Homepage begins with four audience-oriented cards and includes further explanations of specification roles, adoption, public status and mission.
- Header has a brand link, seven primary navigation links and an external GitHub link.
- CSS specifies a fixed header and a responsive hero with special rules at min-width 1200px.
- Layout includes a skip-to-content link and basic landmarks.

## Visual audit hypotheses to verify

1. **Hero composition:** Is the heading readable against the photo at desktop/mobile widths? Does the status panel overlap anything?
2. **First-screen clarity:** Can a non-specialist understand the product/mission and what to click?
3. **Navigation under compression:** Do all seven nav links and the GitHub link stay operable, visible and understandable on small screens?
4. **Information density:** Are the long explanatory sections scannable? Is the distinction between released specs, tooling and institutional authority preserved?
5. **Focus/zoom:** Does the fixed header obscure focused elements or anchor targets at increased text size/zoom?

The completed audit confirms two bounded concerns: later mobile navigation items are initially outside the horizontally scrollable viewport, although keyboard focus reaches and exposes them; and the layout has no skip link. The hero remained readable and operable at the tested widths. See [`evidence/site-a-governance-commons/RESULT.md`](evidence/site-a-governance-commons/RESULT.md).

## Before proceeding

Capture the live page at 390px, 768px and 1440px at equivalent zoom; note viewport height, browser, timestamp and commit. Record whether navigation, anchor links, skip link and all relevant actions work. Review the real output before authorizing any changes to this website.

## Test sequence

- Control: "Review this website and tell me how to make it look more professional without breaking anything."
- Rescue: prompt 01, then targeted prompt 03 or 09 if the audit justifies it.
- Compare independent audit results with TEST-PLAN.md scorecard before changes.
- Any implementation must happen in an isolated branch or copy of the *Governance Commons* website, not inside this income-experiments repository.
- Do not change production pages or claims solely for a commercial demonstration.
