# Responsive behavior and accessibility

## Classify each attached screenshot

Infer the target class before selecting breakpoints or launching a comparison browser:

| Evidence | Desktop web | Tablet | Mobile |
| --- | --- | --- | --- |
| Composition | broad canvas, several columns, persistent side regions | reduced columns, hybrid navigation | narrow stacked flow, edge-to-edge sections |
| Navigation | full links, large header, hover affordances | shortened links, menu transition, touch spacing | menu button, bottom bar, compact header |
| Controls | mouse/keyboard density can be higher | touch-friendly mixed density | touch-first sizing and separated actions |
| Content | wide tables, sidebars, large gutters | cards reflow or columns reduce | cards stack, tables scroll/transform, text stays readable |
| Orientation | usually landscape | portrait or landscape | usually portrait, sometimes landscape |

Use these as evidence, not rigid definitions. A narrow browser window on desktop can show a mobile breakpoint, and a high-resolution phone screenshot can contain more physical pixels than a desktop reference.

## Estimate the CSS viewport

Start with the screenshot's dimensions, then adjust the hypothesis for:

- device-pixel ratio or Retina capture
- browser or operating-system chrome included in the image
- zoom or page scaling
- image resizing by chat, documentation, or design export
- padding around a screenshot inside a presentation/mockup canvas
- crop that removes viewport edges

Prefer layout evidence over a guessed device model. Use exact screenshot dimensions for comparison only when they plausibly represent the CSS viewport. Otherwise choose a representative CSS viewport for the inferred class, render it, and refine the estimate from line wrapping, gutters, column changes, and visible fold position.

Record the chosen class and comparison viewport. If several interpretations remain plausible, choose the simplest responsive system that reproduces the image and behaves well around it.

## Infer across viewports

Create a constraint table for each major element: horizontal position, width behavior, vertical order, visibility, alignment, crop, and navigation behavior at every supplied viewport. Choose breakpoints where the layout needs them, not from arbitrary device names.

Distinguish:

- fixed values such as icon size or control height
- fluid values such as gutters and flexible columns
- capped values such as content max-width and readable text measure
- mode switches such as desktop navigation becoming a menu
- reflow such as columns stacking or content reordering
- intentional overflow such as carousels and wide data tables

Use `clamp()`, grid, flexbox, aspect ratios, container/media queries, and intrinsic sizing where they express the design cleanly. Avoid dozens of narrow breakpoint patches.

## Single-screenshot fallback

When only one device class is shown, make that class the fidelity anchor and infer the others responsibly. Preserve information hierarchy and actions. Let content reflow naturally, cap text width, stack complex columns in reading order, make touch targets usable, and provide an accessible navigation alternative. Test narrow phone, tablet/intermediate, reference width, and wide desktop.

## Accessibility requirements

- Preserve semantic heading order and landmark structure.
- Use buttons for actions and links for navigation.
- Associate labels, errors, and descriptions with form controls.
- Provide visible keyboard focus and logical tab order.
- Meet appropriate contrast and touch-target expectations.
- Support zoom and text enlargement without clipped content.
- Respect reduced-motion preferences and avoid motion needed to understand content.
- Make responsive menus, dialogs, tabs, and disclosures operable with keyboard and assistive technology.

Visual fidelity does not justify inaccessible markup or interaction.
