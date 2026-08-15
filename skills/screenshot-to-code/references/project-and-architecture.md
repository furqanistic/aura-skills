# Project and architecture

## Audit the existing application

Before editing, locate:

- application entry points, routes, layouts, and nested shells
- package manager, scripts, framework and runtime versions
- styling system, reset, tokens, themes, and responsive utilities
- existing components that visually or behaviorally match the screenshot
- public/static assets, fonts, icon sets, and image pipelines
- state management, data fetching, authentication, and API boundaries
- tests, stories, screenshot tooling, linting, formatting, and build rules

Read repository instructions and preserve local conventions. Avoid touching unrelated files or broad global styles when a scoped change can reproduce the design.

## Choose the implementation mode

### Repair an existing screen

Render the current page first. Compare it with the reference, identify the smallest set of structural and token changes that explains the mismatch, and preserve working data and interactions.

### Add a screen to an existing application

Reuse its shell, routing, components, tokens, state patterns, and API layer. Add new primitives only when existing ones cannot represent the screenshot without awkward overrides.

### Build a new interface

Use the requested stack. If none is specified, choose a minimal stack suited to the scope rather than adding a heavy framework by default. Establish a clear entry point, reusable tokens, sensible component boundaries, and a documented run command in the normal project README only if one already exists or the task requires setup documentation.

## Map multiple screenshots

Create a private matrix with columns for screenshot, route, viewport, state, shared shell, unique regions, and assets. Use it to separate:

- responsive views of the same page
- pages sharing navigation or sidebar chrome
- component states such as open/closed, selected/unselected, or success/error
- steps in a flow
- unrelated screens

Build shared structure once. Do not force visually different elements into one over-configured component merely to reduce file count.

## Component boundary test

Extract a component when at least one is true:

- it repeats with meaningful data or variants
- it owns an interaction or state boundary
- it has a clear semantic responsibility
- it is already a project primitive
- isolating it materially improves testing or readability

Keep one-off decorative fragments local. Prefer explicit variants over long chains of conditionals and class overrides.

## Protect existing behavior

Do not replace real APIs, authentication, routing, analytics, localization, or form submission with static screenshot mocks. If live data makes visual comparison unstable, create deterministic fixtures in the existing test/story mechanism or temporarily isolate capture data without changing production behavior.
