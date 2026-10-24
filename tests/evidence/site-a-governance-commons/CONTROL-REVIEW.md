# Site A control review — Governance Commons

**Control instruction:** “Review this website and tell me how to make it look more professional without breaking anything.”

## Materials inspected

- Local Astro build of Governance Commons commit `a6d29fb650f4a72c7ffdd980bd4deba4c26d7c0e`
- Homepage source, shared layout, and global CSS
- Chrome screenshots at 390×844, 768×1024, and 1440×1000

## Control response

The homepage already looks intentional and credible. The green, gold, and paper palette is consistent, the hero has a strong first impression, and the status panel gives the page useful specificity.

To make it feel more professional without changing the content or functionality:

1. Simplify the mobile navigation. Seven links plus GitHub make the header busy on a phone; consider a compact menu.
2. Shorten or slightly reduce the hero headline on smaller screens so it occupies less of the first view.
3. Tighten some of the long explanatory copy and use more subheadings or visual breaks lower on the page.
4. Add more variety to the repeated card sections so the page feels less template-like.
5. Check text contrast over the hero image at every breakpoint and make the overlay darker where needed.

These changes should be tested on desktop and mobile, and the existing links and claims should be preserved.

## Limitations of the control

The response names plausible areas but does not cite measured navigation overflow, distinguish initially hidden links from keyboard reachability, identify the missing skip link, assign priorities, or provide a verification method for each item. It also recommends a menu without considering the behavior and architecture that change would add.
