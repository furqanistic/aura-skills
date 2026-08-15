---
name: screenshot-to-code
description: Recreate websites, application screens, components, dashboards, landing pages, and responsive interfaces from attached screenshots or visual references as accurate, maintainable frontend code. Use when implementing a supplied screenshot, matching an existing UI image, converting mockups into code, rebuilding multiple screens, or correcting a coded page whose rendering differs from a reference. Inspect each image and intelligently infer whether it represents desktop web, tablet, or mobile, then implement and verify the appropriate responsive mode. Supports existing and new projects, any suitable frontend stack, responsive inference, asset matching, accessibility, interaction reconstruction, and visual comparison.
---

# Screenshot to Code

Treat the screenshot as visual evidence, not merely inspiration. Reproduce its design language and visible behavior while keeping the implementation responsive, accessible, and maintainable.

## Operating standard

Work in five gated phases. Do not skip directly from seeing the screenshot to polishing CSS:

1. **Discover** — understand the screenshots, repository, target route, available assets, and runtime.
2. **Specify** — turn visual evidence into layout, token, component, content, state, and responsive decisions.
3. **Construct** — build semantic structure and correct macro geometry before fine styling.
4. **Compare** — render at controlled viewports and measure differences against the references.
5. **Refine** — fix the highest-impact mismatch, recapture, and repeat until the completion gate passes.

Favor visual fidelity over personal design preference, and engineering quality over screenshot-only hacks. A strong result must satisfy both.

## Start with context

1. Open and inspect every attached screenshot at full resolution. Record its pixel dimensions, orientation, visible browser/device chrome, crop, content density, and likely CSS viewport.
2. Inspect the repository before coding. Identify framework, routing, styling approach, component library, design tokens, fonts, assets, breakpoints, testing tools, and the correct page or component entry point.
3. If a matching implementation exists, render it and improve it incrementally. Preserve established architecture and working behavior.
4. If starting from scratch, use the user's requested stack. Otherwise prefer the repository's existing stack; do not replace it just for convenience.
5. Ask only for information that cannot be safely inferred and would materially change the result, such as an unreadable key asset or unknown target route.

For multiple screenshots, map each image to a route, viewport, UI state, and shared shell. Determine whether they show separate pages, responsive variants, modal/menu states, or steps in one flow. Do not implement each screenshot as an unrelated page when evidence shows a common system.

Read [references/project-and-architecture.md](references/project-and-architecture.md) before changing an existing application, selecting component boundaries, or implementing several screens.

## Classify the target viewport intelligently

Decide for every screenshot whether it is primarily a desktop web, tablet, or mobile reference. Make this decision from the full visual evidence—not filename or raw pixel width alone.

- Treat wide navigation, multi-column composition, persistent sidebars, hover-oriented controls, and large content gutters as desktop evidence.
- Treat medium-width layouts, touch-sized controls, reduced columns, and partially collapsed navigation as tablet evidence.
- Treat narrow single-column flow, compact or bottom navigation, stacked actions, edge-to-edge content, and touch-first controls as mobile evidence.
- Account for Retina/device-pixel scaling, browser zoom, image resizing, cropping, and screenshots embedded inside larger canvases. Image pixels may not equal CSS pixels.
- When the evidence conflicts, choose the device class that best explains the layout behavior and state the assumption. Ask the user only if the choice would materially alter the requested result and cannot be inferred responsibly.

Use the inferred class to select the initial implementation and comparison viewport. A desktop screenshot must be rebuilt and checked as desktop web; a tablet screenshot as tablet; and a mobile screenshot as mobile. Still make the page responsive beyond that reference rather than building only one fixed size.

## Build a visual specification

Before implementation, extract:

- page regions, reading order, grid, alignment, widths, gutters, and vertical rhythm
- typography families, weights, relative sizes, line heights, tracking, line wrapping, and hierarchy
- colors, gradients, borders, radii, shadows, opacity, and surface relationships
- image crops, aspect ratios, icons, illustrations, and decorative layers
- repeated components, variants, states, and content patterns
- visible controls and likely interactions
- fixed, sticky, overlapping, clipped, or scroll-driven elements
- evidence of responsive behavior across supplied viewport images

Separate observations from guesses. Record uncertain details and choose the smallest consistent rule set that explains the screenshots. Read [references/visual-analysis.md](references/visual-analysis.md) for the extraction method.

Create a short reconstruction contract before substantial coding:

- target route/component and reference viewport for each screenshot
- exact visible content and required assets
- shared shell and repeated components
- primary layout and typography rules
- responsive changes supported by evidence
- interactions/states to implement
- unresolved assumptions that may affect fidelity

Keep this in working notes rather than adding project documentation unless the user requests it.

## Implement faithfully

1. Establish shared tokens for color, type, spacing, radius, shadow, container width, and breakpoints.
2. Build semantic structure before decorative detail. Use real elements for headings, navigation, buttons, forms, lists, and tables.
3. Create components for genuinely repeated patterns; avoid both one giant component and needless abstraction.
4. Match macro geometry first: page width, region height, grid, alignment, and major spacing. Then tune typography, components, and polish.
5. Use CSS layout systems instead of hardcoded screenshot coordinates. Reserve absolute positioning for genuine overlays and artwork.
6. Preserve visible copy exactly when readable. Do not invent marketing text when the screenshot supplies it.
7. Implement visible interactions and useful states: hover, focus, active, expanded, selected, disabled, loading, and error where implied.
8. Keep data-driven repeated content in arrays or project data sources rather than duplicated markup.

Use the correct fidelity technique:

- Use normal document flow for content that should reflow.
- Use grid when shared row/column alignment is visible.
- Use flexbox for one-dimensional alignment and distribution.
- Use absolute positioning for true overlays, badges, floating art, and intentionally layered composition.
- Use pseudo-elements for simple decoration, not meaningful content.
- Use SVG/CSS shapes only when they reproduce simple geometry cleanly; use real assets for complex art.
- Use fluid or capped sizing where screenshots imply interpolation; avoid freezing an entire page to one canvas size.

Do not redesign the source into a generic template. Do not add fashionable gradients, glass effects, cards, badges, animations, or rounded containers unless the evidence or user asks for them.

Read [references/frontend-quality.md](references/frontend-quality.md) for component architecture, styling discipline, data, routing, performance, and maintainability.

## Handle assets honestly

Search the repository for the exact logo, icon, font, photo, and illustration before creating substitutes. Reuse existing assets when they match. Use an icon library already present when the glyph clearly corresponds.

Do not represent a prominent image with a gradient rectangle or arbitrary emoji. If an exact asset is unavailable, use a legally usable close substitute, generate an asset when authorized and tools allow, or create a clearly isolated placeholder and report it. Never fabricate a brand logo or silently hotlink an unknown source.

Read [references/assets-and-content.md](references/assets-and-content.md) when the screenshot includes important imagery, logos, icons, or unclear text.

## Infer responsive behavior

Use all screenshots together as constraints. Infer which dimensions are fixed, fluid, capped, reordered, hidden, collapsed, or scrollable. Do not create a desktop canvas that merely shrinks.

The agent owns the viewport decision when the user does not specify it. Explain the inferred desktop/tablet/mobile classification in the working summary and verify the result at that class's representative viewport. Do not default every attachment to desktop.

When only one viewport is supplied, implement conservative responsive rules based on content priority and component semantics. Keep key content and actions visible, preserve readable line lengths, collapse navigation appropriately, stack only when necessary, and prevent overflow. Do not claim pixel-perfect fidelity at viewports that were not shown.

Read [references/responsive-and-accessibility.md](references/responsive-and-accessibility.md) before completing multi-viewport, mobile, form, navigation, or interaction-heavy work.

## Reconstruct behavior, not only appearance

Infer interactions from visible affordances and conventional semantics, but do not invent large product flows unsupported by the screenshots. Implement enough behavior for the recreated screen to be credible and usable.

- Make navigation, tabs, accordions, menus, dialogs, carousels, filters, forms, and selection controls work when shown.
- Preserve URL/routing behavior when the repository already defines it.
- Distinguish visual-only demo data from real application wiring; do not replace a working backend with static mock data.
- Provide stable states for empty, loading, error, long content, and narrow widths when the component reasonably requires them.
- Keep motion restrained and evidence-based. Match duration, direction, and easing only when a sequence or live reference supports them.

Read [references/interaction-and-states.md](references/interaction-and-states.md) for state modeling and safe inference.

## Verify with rendered evidence

1. Run the project and capture the implementation at each reference viewport.
2. Compare reference and render side by side or with an overlay/difference tool when available.
3. Fix discrepancies in this order: structure and dimensions, typography and wrapping, spacing and alignment, colors and surfaces, assets, then small decoration.
4. Repeat until remaining differences are minor or caused by missing source information.
5. Check at least one intermediate width not supplied by the user to expose brittle breakpoints.
6. Test keyboard navigation, focus visibility, semantic landmarks, accessible names, contrast, zoom, reduced motion, and overflow.
7. Run formatter, lint/type checks, tests, and production build appropriate to the repository.

Never declare a faithful match without rendering the result. Read [references/verification-loop.md](references/verification-loop.md) for comparison priorities and completion criteria.

Score the result with [references/fidelity-rubric.md](references/fidelity-rubric.md). A high score in tiny decoration cannot compensate for wrong composition, typography, responsiveness, or broken interaction.

## Prohibited shortcuts

- Do not embed the screenshot itself as the page or as a full-screen background.
- Do not trace the whole interface with canvas/SVG paths when semantic HTML and CSS can reproduce it.
- Do not use hundreds of hardcoded coordinates to match one viewport.
- Do not hide mismatches with blur, excessive gradients, overlays, or cropped containers.
- Do not replace exact visible assets with emoji, random icons, or unrelated stock imagery.
- Do not install a new framework, CSS system, or component library unless the current project lacks a suitable foundation and the choice is justified.
- Do not remove existing behavior merely because it is absent from a static screenshot.
- Do not claim responsive fidelity, accessibility, or pixel accuracy without testing it.

## Report

Summarize what was implemented, routes/components changed, screenshots and viewports verified, commands run, remaining visual differences, inferred behavior, and any assets or fonts that still need the user's source files.
