# Lists & Keys

## 📋 Rendering Lists

You can render lists in React by mapping over an array and returning JSX for each item.

\`\`\`tsx
const fruits = ['Apple', 'Banana'];
const listItems = fruits.map(fruit => <li>{fruit}</li>);
\`\`\`

## 🔑 Why Keys Matter?

Keys help React identify which items have changed, been added, or been removed. They give elements a stable identity.

### Rules of Keys
1.  **Unique:** Keys must be unique among siblings.
2.  **Stable:** Keys must not change over time.

## 🚫 The Index as Key Anti-Pattern

Using the array index as a key is **dangerous** if the order of items may change.

\`\`\`tsx
// ❌ BAD if list can be reordered
{items.map((item, index) => (
  <li key={index}>{item.name}</li>
))}
\`\`\`

If you reorder the list, React sees the keys (0, 1, 2) haven't changed, so it assumes the *components* haven't changed. This can lead to:
-   State bugs (input values staying in the wrong place).
-   Performance issues.

### ✅ Use Stable IDs

Always use a unique ID from your data.

\`\`\`tsx
// ✅ GOOD
{items.map((item) => (
  <li key={item.id}>{item.name}</li>
))}
\`\`\`
