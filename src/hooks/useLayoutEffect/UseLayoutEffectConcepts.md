# useLayoutEffect Hook - Concept Explanation

## 🎨 What is useLayoutEffect?

`useLayoutEffect` is a version of `useEffect` that fires **synchronously** after all DOM mutations.

## ⚡ Sync vs Async

-   **useEffect**: Runs **asynchronously** after the render is committed to the screen. The user sees the screen update, *then* the effect runs.
-   **useLayoutEffect**: Runs **synchronously** immediately after React updates the DOM, but *before* the browser paints. The user sees nothing until the effect finishes.

## 🧱 Basic Syntax

The signature is identical to `useEffect`.

\`\`\`typescript
useLayoutEffect(() => {
  // Measure DOM, mutate DOM
  return () => { /* cleanup */ };
}, [dependencies]);
\`\`\`

## 💡 When to use it?

### 1. Measuring DOM Elements
If you need to measure the width, height, or position of an element (e.g., for a tooltip or popover) and then adjust its position based on that measurement.

If you use `useEffect`, the user might see the element jump (flicker) because it renders in the wrong place first, then moves.
With `useLayoutEffect`, the move happens before the paint, so it looks instant.

### 2. Preventing Flicker
Any time you need to mutate the DOM immediately after a render to prevent a visual glitch.

## 🆚 useEffect vs useLayoutEffect

| Feature | useEffect | useLayoutEffect |
| :--- | :--- | :--- |
| **Timing** | Async (after paint) | Sync (before paint) |
| **Blocking?** | No (User sees UI immediately) | Yes (Blocks visual update) |
| **Use Case** | Data fetching, subscriptions, logs | DOM measurements, preventing flicker |
| **Frequency** | 99% of the time | 1% of the time |

## 🚨 Performance Warning
Because `useLayoutEffect` is synchronous, it blocks the browser from painting. Heavy calculations inside it will make your app feel laggy. Always prefer `useEffect` unless you specifically need to fix a visual flicker.
