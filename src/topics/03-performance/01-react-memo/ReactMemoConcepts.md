# React.memo - Comprehensive Guide

## 🚀 What is React.memo?

`React.memo` is a **higher-order component (HOC)** that optimizes functional components by preventing unnecessary re-renders. It memoizes the component and only re-renders when props actually change.

## 🎯 Basic Syntax

```typescript
const MemoizedComponent = React.memo(Component);

// With custom comparison
const MemoizedComponent = React.memo(Component, arePropsEqual);
```

## 🤔 Why React.memo?

### The Problem:
```typescript
function Parent() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <ExpensiveChild name="John" />  {/* Re-renders on every parent render! */}
    </div>
  );
}
```

### The Solution:
```typescript
const ExpensiveChild = React.memo(({ name }) => {
  console.log('Child rendered');
  // Expensive rendering logic
  return <div>Hello {name}</div>;
});

// Now child only re-renders when 'name' prop changes!
```

## 💡 Complete Example

```typescript
interface Props {
  items: string[];
  title: string;
}

// Without React.memo - Re-renders on every parent update
function ItemList({ items, title }: Props) {
  console.log('ItemList rendered');
  return (
    <div>
      <h2>{title}</h2>
      {items.map(item => <div key={item}>{item}</div>)}
    </div>
  );
}

// With React.memo - Only re-renders when props change
const MemoizedItemList = React.memo(ItemList);

function Parent() {
  const [count, setCount] = useState(0);
  const items = ['Apple', 'Banana', 'Orange']; // Same array every time
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <MemoizedItemList items={items} title="Fruits" />
      {/* Doesn't re-render when count changes! */}
    </div>
  );
}
```

## ⚡ Custom Comparison Function

```typescript
interface User {
  id: number;
  name: string;
  metadata: object; // Large object we want to ignore
}

function UserCard({ user }: { user: User }) {
  return <div>{user.name}</div>;
}

// Only re-render if id or name changes, ignore metadata
const MemoizedUserCard = React.memo(
  UserCard,
  (prevProps, nextProps) => {
    return (
      prevProps.user.id === nextProps.user.id &&
      prevProps.user.name === nextProps.user.name
    );
    // Return true = Don't re-render
    // Return false = Do re-render
  }
);
```

## 🚨 Common Mistakes

### Mistake 1: Using with Inline Objects/Arrays

```typescript
function Parent() {
  const MemoChild = React.memo(Child);
  
  return (
    // ❌ Wrong - New object every render!
    <MemoChild user={{ name: 'John' }} />
    
    // ✅ Better - Memoize the object
    <MemoChild user={useMemo(() => ({ name: 'John' }), [])} />
  );
}
```

### Mistake 2: Not Memoizing Callbacks

```typescript
const MemoChild = React.memo(({ onClick }) => {
  return <button onClick={onClick}>Click</button>;
});

function Parent() {
  // ❌ Wrong - New function every render
  return <MemoChild onClick={() => console.log('clicked')} />;
  
  // ✅ Correct - Memoize callback
  const handleClick = useCallback(() => console.log('clicked'), []);
  return <MemoChild onClick={handleClick} />;
}
```

### Mistake 3: Overusing React.memo

```typescript
// ❌ Unnecessary - Component already fast
const SimpleName = React.memo(({ name }) => <span>{name}</span>);

// ❌ Unnecessary - Props always change
const Timer = React.memo(({ time }) => <div>{time}</div>);
// Time changes every second, so memo doesn't help!

// ✅ Good use - Expensive rendering + stable props
const ExpensiveList = React.memo(({ items }) => {
  return items.map(item => <ExpensiveItem key={item.id} {...item} />);
});
```

## ⚡ When to Use React.memo

### ✅ Use when:
1. **Expensive rendering** - Complex calculations, large lists
2. **Stable props** - Props don't change often
3. **Pure component** - Same props = same output
4. **Performance issue** - Measured slow renders
5. **Frequent parent updates** - But child props stay same

### ❌ Don't use when:
1. **Cheap rendering** - Simple components
2. **Props always change** - New values every render
3. **Premature optimization** - No performance issues
4. **Parent rarely renders** - No benefit

## 💡 Real-World Examples

### Example 1: List Items

```typescript
interface ItemProps {
  item: {
    id: number;
    title: string;
    completed: boolean;
  };
  onToggle: (id: number) => void;
}

const TodoItem = React.memo(({ item, onToggle }: ItemProps) => {
  console.log(`Rendering ${item.title}`);
  
  return (
    <div>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => onToggle(item.id)}
      />
      {item.title}
    </div>
  );
}, (prev, next) => {
  // Custom comparison: only re-render if item changed
  return prev.item.id === next.item.id &&
         prev.item.completed === next.item.completed &&
         prev.item.title === next.item.title;
});
```

### Example 2: Chart Component

```typescript
interface ChartProps {
  data: number[];
  width: number;
  height: number;
}

// Expensive D3 or Canvas rendering
const Chart = React.memo(({ data, width, height }: ChartProps) => {
  useEffect(() => {
    // Expensive chart rendering
    renderChart(data, width, height);
  }, [data, width, height]);
  
  return <canvas id="chart" />;
});
```

## ✅ Best Practices

1. **Measure first** - Use React DevTools Profiler
2. **Memoize props** - Use `useMemo` and `useCallback`
3. **Custom comparison** - For complex props
4. **Shallow comparison** - Default behavior
5. **Combine with hooks** - useMemo, useCallback
6. **Don't overuse** - Only when beneficial

## 🔍 Testing Memo Effectiveness

```typescript
let renderCount = 0;

const Component = React.memo(({ value }) => {
  renderCount++;
  console.log(`Rendered ${renderCount} times`);
  return <div>{value}</div>;
});

// Test: Change parent state that doesn't affect child
// Expected: renderCount stays at 1
```

## 🎯 React.memo vs useMemo

```typescript
// React.memo: Memoizes entire COMPONENT
const MemoComponent = React.memo(Component);

// useMemo: Memoizes a VALUE
const memoValue = useMemo(() => expensiveCalculation(), [deps]);

// Often used together!
function Parent() {
  const memoValue = useMemo(() => ({ data: 'value' }), []);
  const MemoChild = React.memo(Child);
  
  return <MemoChild value={memoValue} />;
}
```

## 🎓 Summary

- `React.memo` prevents re-renders when props haven't changed
- Uses shallow comparison by default
- Can provide custom comparison function
- Must memoize props (objects, arrays, functions) for effectiveness
- Don't overuse - measure performance first
- Pairs with `useMemo` and `useCallback`
- Great for expensive list items and complex visualizations
- Returns true = skip render, false = do render
