# useCallback Hook - Comprehensive Guide

## 🔄 What is useCallback?

`useCallback` is a React Hook that returns a **memoized callback function**. It prevents function recreation on every render, which is crucial for performance optimization and preventing unnecessary re-renders of child components.

## 🎯 Basic Syntax

```typescript
const memoizedCallback = useCallback(
  () => {
    // Your function logic
  },
  [dependencies]
);
```

## 🤔 Why useCallback?

### The Problem:
```typescript
function Parent() {
  // ❌ New function created on EVERY render
  const handleClick = () => console.log('clicked');
  
  return <Child onClick={handleClick} />;
}
```

Every time `Parent` renders, a **new function** is created, causing `Child` to re-render even if nothing changed!

### The Solution:
```typescript
function Parent() {
  // ✅ Same function reference across renders
  const handleClick = useCallback(() => {
    console.log('clicked');
  }, []); // Empty deps = never changes
  
  return <Child onClick={handleClick} />;
}
```

## 💡 Complete Example

```typescript
import { useState, useCallback } from 'react';

function SearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  
  // Memoized search function
  const handleSearch = useCallback((searchTerm) => {
    // API call or filtering logic
    const filtered = data.filter(item => 
      item.name.includes(searchTerm)
    );
    setResults(filtered);
  }, []); // No dependencies = function never changes
  
  return (
    <div>
      <SearchInput onSearch={handleSearch} />
      <ResultsList results={results} />
    </div>
  );
}
```

## 📊 With Dependencies

```typescript
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  
  // Function recreates when filter changes
  const getFilteredTodos = useCallback(() => {
    if (filter === 'completed') {
      return todos.filter(t => t.completed);
    }
    if (filter === 'active') {
      return todos.filter(t => !t.completed);
    }
    return todos;
  }, [todos, filter]); // Recreates when these change
  
  return <DisplayTodos getTodos={getFilteredTodos} />;
}
```

## ⚡ useCallback vs useMemo

```typescript
// useCallback returns the function itself
const memoizedFn = useCallback(() => computeValue(), [deps]);

// useMemo returns the RESULT of the function
const memoizedValue = useMemo(() => computeValue(), [deps]);

// These are equivalent:
useCallback(fn, deps) === useMemo(() => fn, deps)
```

## 🚨 Common Mistakes

### Mistake 1: Overusing useCallback

```typescript
// ❌ Unnecessary - Not passed to children
const handleClick = useCallback(() => {
  console.log('Clicked');
}, []);

// ✅ Just use regular function
const handleClick = () => console.log('Clicked');
```

### Mistake 2: Missing Dependencies

```typescript
// ❌ Wrong - Missing count dependency
const increment = useCallback(() => {
  setCount(count + 1);
}, []); // count is stale!

// ✅ Correct - Include count
const increment = useCallback(() => {
  setCount(count + 1);
}, [count]);

// ✅ Better - Use functional update
const increment = useCallback(() => {
  setCount(prev => prev + 1);
}, []); // No dependencies needed!
```

### Mistake 3: Using Without React.memo

```typescript
// ❌ Child will still re-render
function Child({ onClick }) {
  return <button onClick={onClick}>Click</button>;
}

// ✅ Must use React.memo for optimization
const Child = React.memo(({ onClick }) => {
  return <button onClick={onClick}>Click</button>;
});
```

## 💡 Real-World Use Cases

1. **Event Handlers** passed to memoized children
2. **Debounced Functions** - Search input handlers
3. **Effect Dependencies** - Stable function references
4. **Context Values** - Prevent context consumers from re-rendering
5. **Custom Hooks** - Return stable callbacks

## ✅ Best Practices

1. **Use with React.memo** - Child must be memoized
2. **Don't overuse** - Only when passing to optimized children
3. **Include dependencies** - Use ESLint plugin
4. **Prefer functional updates** - Reduce dependencies
5. **Profile first** - Don't optimize prematurely

## 🎯 When NOT to Use

- Function not passed as prop
- Parent component rarely re-renders
- Child is not memoized
- No performance issues observed

## 🔍 Example: Preventing Re-renders

```typescript
// Parent component
function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  
  // Stable callback - doesn't change when text changes
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);
  
  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <ExpensiveChild onClick={increment} />
    </div>
  );
}

// Child only re-renders when onClick actually changes
const ExpensiveChild = React.memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Increment</button>;
});
```

## 🎓 Summary

- `useCallback` memoizes functions to prevent recreation
- Use when passing callbacks to optimized child components
- Must pair with `React.memo` on children
- Include all dependencies in the array
- Don't overuse - measure performance first
- Prefer functional state updates to reduce dependencies
