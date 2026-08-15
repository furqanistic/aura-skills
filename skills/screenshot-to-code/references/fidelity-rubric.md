# Fidelity rubric

Use this rubric after every serious comparison pass. Score each category from 0 to 4 using rendered evidence.

## Categories and weights

| Category | Weight | 4 means |
| --- | ---: | --- |
| Composition and layout | 25 | Regions, silhouette, grid, sizing, alignment, and fold match closely. |
| Typography | 15 | Font character, hierarchy, metrics, wrapping, and density match closely. |
| Spacing and rhythm | 15 | Gutters, section cadence, padding, gaps, and whitespace relationships match. |
| Color and surfaces | 10 | Palette, contrast, borders, radii, gradients, and depth follow the reference. |
| Assets and imagery | 10 | Correct assets, crop, focal position, icon style, and media proportions are used. |
| Responsive behavior | 10 | Supplied viewports match and intermediate widths interpolate cleanly. |
| Components and states | 5 | Repeated patterns and visible states are consistent and functional. |
| Accessibility and semantics | 5 | Structure, names, focus, keyboard use, contrast, and zoom remain sound. |
| Engineering quality | 5 | Code fits the repository, passes checks, and avoids brittle screenshot hacks. |

Calculate the weighted percentage as `sum(score / 4 * weight)`.

## Interpretation

- **90–100:** strong faithful reconstruction; only minor differences remain
- **80–89:** good result, but at least one visible category still needs refinement
- **70–79:** recognizable yet materially different; continue iteration
- **below 70:** structural or systematic mismatch; revisit analysis rather than polishing

Do not use the total to conceal a critical defect. Broken routes, missing major regions, unusable controls, full-screen screenshot embedding, or severe overflow fail the work regardless of score.

## Mismatch log

For each remaining issue, record region, category, severity, observed difference, likely cause, proposed shared fix, and verification viewport. Fix blocking and major issues first. Prefer one token or layout correction that resolves multiple entries over isolated nudges.
