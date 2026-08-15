# Visual analysis

## Create an evidence map

Inspect the image at native resolution and note:

- exact viewport dimensions and whether browser chrome is included
- bounding regions: header, navigation, hero, content, sidebar, footer, overlays
- shared alignment lines and container edges
- column ratios, gaps, padding, section heights, and whitespace rhythm
- text strings, line counts, wraps, alignment, and emphasis
- image and media bounds, crop behavior, focal point, and aspect ratio
- repeated primitives and differences between their variants
- visible states such as selected tabs, open menus, validation, or disabled controls

Classify each note as observed, strongly inferred, or unknown. Do not turn a guess into a requirement.

## Derive a small design system

Estimate relationships before exact values. Identify a base spacing unit, a type scale, container width, surface hierarchy, border/radius family, and primary/secondary action rules. Prefer a few coherent tokens over dozens of unrelated measurements.

Use actual pixel/color sampling tools when available, but account for screenshot scaling, compression, antialiasing, shadows, and color profiles. Sample flat interior areas rather than text edges.

## Reconstruct layers

Determine whether a visual is normal flow, grid/flex placement, absolute overlay, pseudo-element, background, mask, sticky region, or fixed control. Look for clipping, shared movement boundaries, and overlap shadows. Choose the simplest browser layout model that would naturally produce the evidence.

## Prioritize fidelity

Large errors dominate perception. Match in this order:

1. overall composition and page silhouette
2. container dimensions, columns, and section spacing
3. typography metrics and line wrapping
4. main assets and crop positions
5. component shapes, colors, borders, and shadows
6. icons and micro-decoration

Avoid tuning tiny details while the grid or font metrics remain wrong.
