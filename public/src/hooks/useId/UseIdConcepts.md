# useId

## 🆔 What is it?

`useId` is a hook that generates unique IDs that are stable across server and client rendering.

## 🎯 Why do we need it?

When building accessible forms, each input needs a unique `id` that matches its label's `htmlFor` attribute. Hardcoding IDs is problematic because:
- Components can be reused multiple times on the same page
- IDs must be unique across the entire document
- Server and client IDs must match (for SSR/hydration)

## ✅ Usage

\`\`\`tsx
function TextField({ label }) {
  const id = useId();
  
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" />
    </>
  );
}
\`\`\`

## 🚫 Don't use for:

- ❌ Keys in lists (use stable IDs from your data)
- ❌ General random IDs (use crypto.randomUUID())

## ✨ Benefits

1. **SSR Safe**: IDs are consistent between server and client
2. **Collision-Free**: Each `useId()` call generates a unique ID
3. **Reusable Components**: Same component can be used multiple times
