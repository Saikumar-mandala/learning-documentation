# useInsertionEffect

## 💉 What is it?

`useInsertionEffect` fires **before** DOM mutations, making it ideal for injecting `<style>` tags for CSS-in-JS libraries.

## 🎯 Purpose

It's specifically designed for CSS-in-JS libraries (styled-components, emotion) to inject styles **before** the browser paints, avoiding layout thrashing.

## ⚠️ Limitations

- Runs **before** DOM updates
- Cannot access refs
- Cannot update state
- Rarely used in application code

## ✅ Usage (CSS-in-JS Libraries)

\`\`\`tsx
useInsertionEffect(() => {
  // Inject <style> tag
  const style = document.createElement('style');
  style.textContent = \`.my-class { color: blue; }\`;
  document.head.appendChild(style);
  
  return () => {
    document.head.removeChild(style);
  };
}, []);
\`\`\`

## 📊 Timing Comparison

1. **useInsertionEffect** - Inject styles
2. **useLayoutEffect** - Read layout, apply DOM changes
3. **Browser Paint**
4. **useEffect** - Side effects

## 💡 When to Use

- You're building a CSS-in-JS library
- You need to inject `<style>` tags dynamically
- **Don't use** for regular application logic (use `useEffect` or `useLayoutEffect`)
