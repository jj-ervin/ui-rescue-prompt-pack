# UI Rescue test result — Site B: Cedar & Stone

| Field | Value |
|---|---|
| Site identifier | B — fictional Cedar & Stone Home Services |
| Frozen baseline commit | `61950bab3dc13c6b6e1093c7a84296853b05032d` |
| Test date / reviewer | 2026-10-24 / Codex self-review |
| Browser / OS | Google Chrome 156.0.8078.47 / Windows 10.0.26200.0 |
| Viewports / zoom | 390×844, 768×1024, 1440×1000 / 100%, DPR 1 |
| AI builder / model | OpenAI Codex model; exact backend version was not exposed |
| Baseline generation prompt | Exact neutral prompt in `SITE-B-SIMPLE-AI-SITE.md` |
| Control | Ordinary instruction from `TEST-PLAN.md` |
| Rescue | Bonus 01, Prompts 02, 07, 11, and 12; repository versions at test time |

## Scorecard

Ratings are the implementing reviewer's structured assessment, not an independent or blinded panel score.

| Dimension | Weight | Control rating | Control points | Rescue rating | Rescue points | Evidence |
|---|---:|---:|---:|---:|---:|---|
| Evidence-specific observations | 25 | 2 | 10 | 5 | 25 | Rescue cites exact baseline patterns and viewports. |
| Actionable corrections | 25 | 3 | 15 | 5 | 25 | Rescue supplies a bounded implementation and verification criteria. |
| Visual judgment | 20 | 3 | 12 | 4 | 16 | Rescue replaces generic decoration with a coherent editorial direction. |
| Functionality preservation | 15 | 3 | 9 | 5 | 15 | Links, categories, placeholders, disclosure, and no-form behavior are preserved. |
| Responsive / accessibility coverage | 15 | 2 | 6 | 5 | 15 | Three viewports, skip link, keyboard order, focus styling, and overflow checks. |
| **Total** | **100** |  | **52** |  | **96** | **Rescue +44** |

The improvement exceeds the 15-point experimental threshold. It is not evidence of sales, buyer preference, or general performance across models.

## Implemented changes

- Warm cedar/stone/moss palette and serif-led editorial typography.
- Specific hero language and explicit fictional/demo eyebrow.
- Asymmetric desktop hero with a non-interactive service note; stacked tablet/mobile treatment.
- Numbered service list instead of generic equal cards.
- Clearer demo contact block while preserving placeholder schemes and zero forms.
- Visible-on-focus skip link, focus treatment, anchor scroll offset, and reduced-motion rule.

Only `examples/site-b-cedar-stone/improved/` was changed for the makeover. The baseline remains at its immutable commit.

## Prompt 12 regression classification

| Approved goal | Result | Evidence |
|---|---|---|
| Establish a recognizable visual direction | Verified successful | Matching after screenshots use the cedar/stone/moss system at all widths. |
| Improve hero specificity and hierarchy | Verified successful | Specific service language and two explicit demo actions are visible at all widths. |
| Remove generic equal-card rhythm | Verified successful | Numbered editorial service list replaces the card trio. |
| Preserve content and behavior | Verified successful | All anchors resolve; `mailto:` and `tel:` placeholders remain; no form/backend added. |
| Improve keyboard entry | Verified successful | First focus is “Skip to content”; nine expected links follow in DOM order. |
| Avoid horizontal overflow | Verified successful | Capture harness recorded scroll width equal to viewport at 390, 768, and 1440. |
| Establish accessibility conformance | Not verified | No WCAG audit, screen reader, or automated accessibility engine was run. |

## Screenshots

| Viewport | Before | After |
|---|---|---|
| 390×844 | [PNG](screenshots/site-b-before-390x844.png) | [PNG](screenshots/site-b-after-390x844.png) |
| 768×1024 | [PNG](screenshots/site-b-before-768x1024.png) | [PNG](screenshots/site-b-after-768x1024.png) |
| 1440×1000 | [PNG](screenshots/site-b-before-1440x1000.png) | [PNG](screenshots/site-b-after-1440x1000.png) |

## Checks and outcome

- All baseline and improved internal anchors resolve.
- Placeholder `mailto:` and `tel:` links are present in both versions; they were not activated.
- Both versions contain one `h1` and zero forms.
- Improved keyboard order: skip link, brand, three navigation links, two hero actions, email placeholder, phone placeholder.
- Browser console: no warnings or errors on the improved page.
- Static-server log: `/favicon.ico` returned 404 in both baseline and improved versions. This is an unchanged resource omission, not a makeover regression.
- True CSS viewport screenshots rendered at all required sizes with DPR 1 and no document overflow.
- **Recommendation: Ready as bounded experimental evidence.**

## Limitations and correction attempts

- Control and Rescue were produced in the same Codex session, not fresh isolated conversations. This is the largest protocol deviation.
- The reviewer implemented and scored the result; there was no independent or blinded scoring.
- An initial screenshot attempt used Chrome `--window-size`; its narrow layout viewport did not match the file width. Those images were replaced using the DevTools viewport override, and the capture script now fails on viewport mismatch.
- Captures show the first viewport, not the complete page.
- No screen-reader, automated accessibility, contrast, performance, or user-comprehension test was run.
- No real form, booking, phone, or email behavior exists by design.
- The example has no favicon; browsers that request `/favicon.ico` receive 404.
