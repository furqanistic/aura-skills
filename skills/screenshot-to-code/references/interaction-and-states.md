# Interaction and states

## Infer conservatively

A screenshot proves appearance at one moment, not an entire product specification. Infer behavior only from visible affordances, companion screenshots, existing code, or standard semantics. Record uncertain behavior and choose a reversible implementation.

## Common controls

- **Navigation:** preserve routes when known; indicate current location accessibly.
- **Tabs:** switch the relevant panel, retain selection when appropriate, and support keyboard behavior.
- **Menus and popovers:** manage open state, outside click, Escape, focus return, and viewport collision.
- **Dialogs:** trap focus, label the dialog, close predictably, and prevent background interaction.
- **Accordions:** connect control and region state and animate without hiding content from assistive technology.
- **Carousels:** provide controls and stable layout; do not add autoplay unless supported by evidence.
- **Forms:** use real labels, validation, submission state, and error placement; do not simulate success without wiring or clearly scoped demo behavior.
- **Filters and sorting:** make visible state affect displayed data when the screen implies functionality.

## State inventory

For each stateful component, consider default, hover, focus-visible, active/pressed, selected/current, disabled, loading, empty, validation error, success, and overflow/long-content states. Implement the states required by evidence and the minimum needed for robust use.

Do not overbuild invisible backend workflows. Preserve existing application logic when it exists.

## Motion

Infer motion only when a screenshot sequence, live reference, or explicit request supports it. Use motion to explain state change, not to decorate every element. Match likely spatial direction, keep duration restrained, avoid layout thrashing, and respect reduced motion.

## Interaction verification

Exercise controls with mouse, keyboard, and touch-sized viewports. Verify focus movement, Escape behavior, route changes, scroll locking, selected state, validation, and persistence. Capture relevant open/selected states when screenshots include them.
