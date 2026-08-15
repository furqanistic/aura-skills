# Verification loop

## Capture consistently

Use the exact reference viewport width and height, the same device-pixel assumptions where known, a stable browser, loaded fonts, deterministic data, and disabled incidental animations. Wait for images and fonts before capture.

## Compare

Use side-by-side inspection for design meaning and an opacity overlay or image difference for geometry. A raw pixel difference is evidence, not a complete quality score: font rasterization, browser rendering, and image compression can differ even when the implementation is sound.

Track discrepancies by region and severity:

- blocking: wrong page structure, missing region, broken interaction, overflow
- major: wrong geometry, font, crop, wrapping, or responsive mode
- moderate: spacing, color, radius, shadow, or component-state mismatch
- minor: small icon or antialiasing differences

Fix a shared token or layout rule when it explains several errors. Avoid accumulating one-off offsets.

## Completion criteria

Complete only when:

- all supplied viewports have been rendered and compared
- hierarchy, grid, typography, main assets, and spacing closely match
- intermediate widths behave without collision, clipping, or accidental overflow
- visible interactions work and keyboard/focus behavior is sound
- console has no relevant runtime errors
- repository checks and production build pass, or failures are clearly reported
- missing assets, unreadable content, and deliberate deviations are documented

Do not hide unresolved mismatches behind “pixel perfect.” State what remains different and why.
