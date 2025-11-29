# Handling Events

## 🖱️ Synthetic Events

React doesn't use raw browser events. It wraps them in **SyntheticEvents** to ensure consistency across all browsers.

-   They work just like native events (`e.stopPropagation()`, `e.preventDefault()`).
-   Attributes are named using camelCase (`onClick`, `onSubmit`, `onMouseEnter`).

## 🫧 Event Propagation (Bubbling)

By default, events "bubble" up the DOM tree. If you click a button inside a div, the click handler on the button fires first, then the handler on the div.

### Stopping Propagation
Use `e.stopPropagation()` to stop the event from reaching parent elements.

\`\`\`tsx
const handleButtonClick = (e) => {
  e.stopPropagation(); // Parent won't know I was clicked
  console.log('Button clicked');
};
\`\`\`

## 🚫 Preventing Default Behavior

Use `e.preventDefault()` to stop the browser's default action (like reloading the page on form submit).

\`\`\`tsx
const handleSubmit = (e) => {
  e.preventDefault(); // Don't reload!
  console.log('Form submitted');
};
\`\`\`
