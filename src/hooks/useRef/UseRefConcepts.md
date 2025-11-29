# useRef Hook - Comprehensive Guide

## 🎯 What is useRef?

`useRef` is a React Hook that returns a **mutable ref object** that persists across renders. Unlike state, updating a ref doesn't cause a re-render, making it perfect for storing values that don't need to trigger UI updates.

## 🔑 Basic Syntax

```typescript
const ref = useRef(initialValue);
```

- **ref.current**: Holds the mutable value
- Persists across renders
- Doesn't trigger re-renders when changed

## 💡 Two Main Use Cases

### 1. Accessing DOM Elements

```typescript
function TextInputWithFocus() {
  const inputRef = useRef<HTMLInputElement>(null);
  
  const focusInput = () => {
    inputRef.current?.focus();
  };
  
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

### 2. Storing Mutable Values

```typescript
function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef<number>();
  
  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
  };
  
  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
```

## ⚡ useRef vs useState

```typescript
// useState: Triggers re-render
const [value, setValue] = useState(0);
setValue(1); // Component re-renders

// useRef: No re-render
const valueRef = useRef(0);
valueRef.current = 1; // No re-render
```

## 🎨 Common Patterns

### Pattern 1: Previous Value

```typescript
function usePrevious(value) {
  const ref = useRef();
  
  useEffect(() => {
    ref.current = value;
  }, [value]);
  
  return ref.current;
}

// Usage
function Component({ count }) {
  const prevCount = usePrevious(count);
  
  return <div>Now: {count}, Before: {prevCount}</div>;
}
```

### Pattern 2: Instance Variables

```typescript
function Component() {
  // Like instance variables in class components
  const renderCount = useRef(0);
  
  useEffect(() => {
    renderCount.current++;
  });
  
  return <div>Render count: {renderCount.current}</div>;
}
```

### Pattern 3: Callback Refs

```typescript
function MeasureExample() {
  const [height, setHeight] = useState(0);
  
  const measuredRef = useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);
  
  return (
    <div ref={measuredRef}>
      <h1>Hello</h1>
      <p>Height: {height}px</p>
    </div>
  );
}
```

## 🚨 Common Mistakes

### Mistake 1: Expecting Re-render on Change

```typescript
// ❌ Wrong - No re-render!
const countRef = useRef(0);
countRef.current++;
// UI won't update

// ✅ Use useState if you need re-renders
const [count, setCount] = useState(0);
setCount(count + 1);
// UI updates
```

### Mistake 2: Accessing Ref Too Early

```typescript
// ❌ Wrong - Ref might be null
function Component() {
  const inputRef = useRef(null);
  inputRef.current.focus(); // Error: current is null
  
  return <input ref={inputRef} />;
}

// ✅ Correct - Access in effect or handler
function Component() {
  const inputRef = useRef(null);
  
  useEffect(() => {
    inputRef.current?.focus(); // Safe
  }, []);
  
  return <input ref={inputRef} />;
}
```

### Mistake 3: Using Ref as Dependency

```typescript
// ❌ Wrong - Ref doesn't trigger effect
useEffect(() => {
  console.log(ref.current);
}, [ref]); // Ref object never changes

// ✅ If you need to react to changes, use state
const [value, setValue] = useState(ref.current);
```

## ⚡ Real-World Use Cases

1. **Focus Management** - Auto-focus inputs
2. **Scroll Position** - Preserve scroll
3. **Animations** - RequestAnimationFrame IDs
4. **Third-party Libraries** - D3, Chart.js integration
5. **Previous Values** - Track previous state/props
6. **Timeout/Interval IDs** - Cleanup timers
7. **Performance** - Avoid expensive re-renders

## 🔍 Advanced: Forward Refs

```typescript
const CustomInput = forwardRef<HTMLInputElement>((props, ref) => {
  return <input ref={ref} {...props} />;
});

// Parent can access child's input
function Parent() {
  const inputRef = useRef<HTMLInputElement>(null);
  
  const focus = () => inputRef.current?.focus();
  
  return <Cu stomInput ref={inputRef} />;
}
```

## 💡 Best Practices

1. **Don't use for rendering** - Use state instead
2. **Store mutable values** - Timers, subscriptions
3. **Access DOM elements** - Focus, scroll, measure
4. **Previous values** - Track changes
5. **Avoid in render** - Access in effects/handlers
6. **Clean up** - Clear intervals/timeouts

## 🎯 When to Use useRef vs useState

| Scenario | useRef | useState |
|----------|--------|----------|
| Triggers re-render | ❌ No | ✅ Yes |
| Mutable value | ✅ Yes | ❌ No |
| DOM access | ✅ Yes | ❌ No |
| Show in UI | ❌ No | ✅ Yes |
| Interval/Timer IDs | ✅ Yes | ❌ No |
| Form values | ❌ No | ✅ Yes |

## 🎓 Summary

- `useRef` creates a mutable reference that persists across renders
- Changing `.current` doesn't trigger re-renders
- Two main uses: DOM access and storing mutable values
- Perfect for timers, subscriptions, and third-party libs
- Not for values that should trigger UI updates
- Useful for tracking previous values
- Can be forwarded to child components
