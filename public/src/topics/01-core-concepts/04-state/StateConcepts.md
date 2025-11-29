# State & Immutability Concepts

## 📸 The Snapshot Mindset

State in React behaves like a snapshot. Setting state does not change the existing state variable, but instead triggers a re-render.

## 🚫 Mutation is Evil

In React, you should treat state as read-only. **Never mutate state directly.**

\`\`\`tsx
// ❌ WRONG: Mutation
const [user, setUser] = useState({ name: 'Alice', age: 25 });

user.age = 26; // React doesn't know this changed!
setUser(user); // Reference is the same, no re-render.
\`\`\`

## ✅ Immutability is Key

To update an object or array, you must create a **new** copy.

\`\`\`tsx
// ✅ CORRECT: Creating a new object
setUser({
  ...user, // Copy existing properties
  age: 26  // Override specific property
});
\`\`\`

## 📦 Updating Arrays

Avoid methods that mutate the array (like `push`, `pop`, `splice`). Use methods that return a new array (like `map`, `filter`, `slice`, `concat`).

\`\`\`tsx
// Adding
setList([...list, newItem]);

// Removing
setList(list.filter(item => item.id !== targetId));

// Updating
setList(list.map(item => 
  item.id === targetId ? { ...item, done: true } : item
));
\`\`\`
