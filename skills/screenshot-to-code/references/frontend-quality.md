# Frontend quality

## Structure

Use semantic HTML and the framework's normal composition model. Keep source order meaningful even when CSS changes visual placement. Avoid duplicating separate desktop and mobile DOM trees unless semantics or interaction truly require them.

Keep route/page components focused on composition. Put reusable visual primitives, stateful controls, data adapters, and utility logic at boundaries consistent with the repository.

## Styling

Prefer existing tokens and utilities. When creating tokens, name them by role rather than screenshot color, for example `--surface-muted` instead of `--gray-2`. Define deliberate scales for spacing, typography, radii, and shadows without forcing every measured value onto the scale.

Avoid:

- arbitrary `!important` chains
- global selectors that leak into unrelated pages
- repeated magic numbers that represent the same relationship
- negative margins used to repair incorrect structure
- transforms used to align normal-flow content
- breakpoint patches that fight one another

An unusual value is acceptable when it represents a real visual feature. Document only the non-obvious constraint, not every CSS declaration.

## Content and data

Model repeated cards, rows, navigation items, and tabs as data. Preserve realistic content length because wrapping and density are part of the reference. Handle long titles, missing images, zero values, and empty collections without destroying layout.

Reuse existing data sources. If mock data is necessary, isolate it clearly and do not present it as production integration.

## Performance

Size images appropriately, preserve aspect ratios to prevent layout shift, lazy-load below-the-fold media when suitable, and avoid shipping giant source images for small cards. Do not degrade first paint with unnecessary animation libraries or duplicate font families.

Prefer CSS effects over heavy raster assets only when the result is visually faithful. Avoid premature optimization that changes the design.

## Framework safety

- Follow the framework's supported image, font, routing, and server/client boundaries.
- Avoid browser globals during server rendering.
- Preserve hydration consistency by keeping capture/demo data deterministic.
- Use stable keys and avoid state derived redundantly from props.
- Keep dependencies minimal and inspect existing versions before using new APIs.

## Quality gate

Require clean console output, valid interactive markup, no accidental horizontal scroll, stable layout after fonts/images load, correct route refresh, and passing repository checks. Treat warnings related to accessibility, hydration, duplicate keys, or missing assets as implementation defects.
