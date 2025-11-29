# useContext Hook - Concept Explanation

## 🌐 What is useContext?

`useContext` is a **React Hook** that provides a way to pass data through the component tree without having to pass props down manually at every level. This is commonly known as solving **"Prop Drilling"**.

It allows you to share values like these between components without explicitly passing a prop through every level of the tree:
- Current authenticated user
- Theme (light/dark)
- Preferred language
- Global application state

## 🎯 Basic Syntax

### 1. Create Context
First, you need to create a context object. This is usually done in a separate file.

\`\`\`typescript
import { createContext } from 'react';

// Create context with a default value
const MyContext = createContext(defaultValue);
\`\`\`

### 2. Provide Context
Wrap your component tree with the Context Provider and pass the value.

\`\`\`typescript
<MyContext.Provider value={/* some value */}>
  <App />
</MyContext.Provider>
\`\`\`

### 3. Consume Context
Use the `useContext` hook to access the value in any child component.

\`\`\`typescript
import { useContext } from 'react';

const MyComponent = () => {
  const value = useContext(MyContext);
  return <div>{value}</div>;
};
\`\`\`

## 🔑 Key Concepts

### 1. **The Provider**
The `Provider` component accepts a `value` prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.

### 2. **The Consumer (useContext)**
The `useContext` hook accepts a context object (the value returned from `createContext`) and returns the current context value for that context. The current context value is determined by the `value` prop of the nearest `<MyContext.Provider>` above the calling component in the tree.

### 3. **Re-rendering**
When the Provider's `value` changes, all components that are consumers of that Provider will re-render.

## 📚 Common Patterns

### Pattern 1: Custom Provider Component
It's best practice to create a custom provider component to encapsulate logic.

\`\`\`typescript
// ThemeContext.tsx
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
\`\`\`

### Pattern 2: Custom Hook for Consumption
Create a custom hook to make consuming the context easier and safer.

\`\`\`typescript
// useTheme.ts
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
\`\`\`

## 🚨 Common Mistakes

### Mistake 1: Not Wrapping with Provider
If you try to use `useContext` without a Provider up the tree, you'll get the default value passed to `createContext`. If you didn't provide a default value (or passed `null`), this often leads to crashes.

### Mistake 2: Overusing Context
Context is primarily used when some data needs to be accessible by *many* components at different nesting levels. Apply it sparingly because it makes component reuse more difficult (components become coupled to the context).

### Mistake 3: Performance Issues
If you pass a new object to the `value` prop every render, all consumers will re-render every time the Provider re-renders.

\`\`\`typescript
// ❌ Bad - New object created every render
<Context.Provider value={{ something: 'value' }}>

// ✅ Good - Memoized value
const value = useMemo(() => ({ something: 'value' }), []);
<Context.Provider value={value}>
\`\`\`

## 💡 Best Practices

1.  **Split Contexts**: Don't put everything in one giant context. Split them by domain (Auth, Theme, Settings).
2.  **Use Custom Hooks**: Always wrap `useContext` in a custom hook for better error handling and cleaner API.
3.  **Keep State Close**: Only put truly global state in Context. Local state should stay local.

## 🔄 Prop Drilling vs Context

**Prop Drilling (Without Context):**
App -> Layout -> Header -> UserMenu -> Avatar (Avatar needs user data)
*You have to pass `user` prop through Layout, Header, and UserMenu even though they don't use it.*

**With Context:**
App (Provider) -> ... -> Avatar (Consumer)
*Avatar accesses `user` data directly from Context. Intermediate components don't need to know about it.*
