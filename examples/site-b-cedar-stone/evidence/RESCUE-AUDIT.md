# Site B Rescue audit and approved direction

## Materials inspected

- Frozen baseline commit `61950bab3dc13c6b6e1093c7a84296853b05032d`
- Baseline HTML and CSS
- Chrome captures at 390×844, 768×1024, and 1440×1000
- Navigation anchors and placeholder email/phone links

## Bonus 01 — five highest-value issues

1. **Generic identity:** The blue gradient, rounded illustration tile, emoji-led equal cards, and broad “Quality home services” copy could represent almost any AI-generated service page. **Essential.** Replace them with one coherent, grounded visual direction.
2. **Weak content specificity:** The hero does not name the three actual categories or give visitors a concrete mental model. **Essential.** Use specific task language while retaining the fictional/demo boundary.
3. **Predictable section rhythm:** Centered heading, three equal cards, rounded panels, and shadow styling repeat common templates. **Important.** Use an editorial service list and asymmetric information layout.
4. **Contact conclusion lacks hierarchy:** Placeholder details are present, but the section does not clearly distinguish a demo action from a real booking path. **Important.** Make the limitation and placeholders part of the visual hierarchy.
5. **Baseline accessibility is adequate but incomplete:** Focus outlines exist and landmarks/headings are sensible, but there is no skip link. **Important.** Add a visible-on-focus skip link and preserve one `h1`.

Verification: matching screenshots, no horizontal overflow, anchor resolution, keyboard focus order, one `h1`, zero forms, and no browser errors.

## Prompt 02 — genericity review

- **Exact pattern:** Blue gradient hero tile plus a house glyph and sparkle. This visual is unrelated to specific home-maintenance work. Replace it with information design rather than another decorative image.
- **Exact pattern:** Three identical rounded service cards with emoji icons. The treatment makes different service types feel interchangeable. Replace with a numbered, scan-friendly list.
- **Exact pattern:** Broad “quality / count on” headline and “get in touch” CTA. These phrases do not differentiate the fictional offer. Replace with task-specific language and explicit demo actions.
- **Keep as-is:** simple three-link navigation; clearly fictional status; no fake testimonials or trust statistics.

**Cohesive direction:** warm cedar, stone, moss, and paper colors; a restrained serif display face paired with system sans-serif text; strong rules and numbered service rows; asymmetric desktop hero; no external imagery or dependency.

## Prompt 07 — three hero directions

### A. Minimal / clarity-first

- Headline: “Small repairs and seasonal upkeep, clearly scoped.”
- Layout: single-column copy with a concise service list immediately below.
- Mobile: one CTA, no decorative panel.
- Tradeoff: clearest, but less distinctive.

### B. Brand-forward

- Headline: “Small repairs. Seasonal upkeep. One straightforward call.”
- Layout: large editorial copy plus a moss-colored service note; cedar CTA; stone/paper background.
- Mobile: stack the note after the hero actions.
- Tradeoff: strongest identity; long headline requires careful wrapping.

### C. Action-oriented

- Headline: “What is on your home repair list?”
- Layout: compact hero followed by three service choices and a contact CTA.
- Mobile: service links appear in the first viewport.
- Tradeoff: risks implying an active booking flow that the demo does not provide.

**Selected:** B with A's clarity discipline. The demo cannot support C's implied live interaction.

## Approved implementation scope

- Preserve all three navigation targets, service categories, fictional disclosure, placeholder email and phone links, and no-backend behavior.
- Replace only visual composition and tightly related copy in an isolated `improved/` copy.
- Add a skip link, visible focus styling, target scroll offset, and reduced-motion handling.
- Add no dependencies, scripts, forms, testimonials, prices, claims, or integrations.
