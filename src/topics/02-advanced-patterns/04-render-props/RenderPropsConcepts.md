# Render Props

## 🎯 What are they?

A technique for sharing code between components using a prop whose value is a function.

## ✅ Pattern

\`\`\`tsx
<MouseTracker>
  {(mouse) => (
    <p>Mouse position: {mouse.x}, {mouse.y}</p>
  )}
</MouseTracker>
\`\`\`

## 💡 Use Cases

- Mouse/touch tracking
- Data fetching
- Toggle state
- Any shared behavior
\`\`\`
