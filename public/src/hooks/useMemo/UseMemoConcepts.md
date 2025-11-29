# useMemo Hook - Comprehensive Guide

## 💾 What is useMemo?

`useMemo` is a React Hook that **memoizes the result** of expensive computations. It only recomputes the value when dependencies change, preventing unnecessary recalculations on every render.

## 🎯 Basic Syntax

```typescript
const memoizedValue = useMemo(
  () => computeExpensiveValue(a, b),
  [a, b]
);
```

## 🤔 Why useMemo?

### The Problem:
```typescript
function Component({ items }) {
  // ❌ Expensive calculation runs on EVERY render
  const sortedItems = items.sort((a, b) => a.value - b.value);
  
  return <List items={sortedItems} />;
}
```

### The Solution:
```typescript
function Component({ items }) {
  // ✅ Only recalculates when items change
  const sortedItems = useMemo(
    () => items.sort((a, b) => a.value - b.value),
    [items]
  );
  
  return <List items={sortedItems} />;
}
```

## 💡 Complete Example: Filtering Large Lists

```typescript
function ProductList({ products, searchTerm }) {
  const filteredProducts = useMemo(() => {
    console.log('Filtering products...');
    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]); // Only refilter when these change
  
  return (
    <div>
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
```

## ⚡ When to Use useMemo

### Use when:
1. **Expensive calculations** - Sorting, filtering large arrays
2. **Complex transformations** - Data processing
3. **Preserving references** - Prevent child re-renders
4. **Derived state** - Computing values from props/state

### Don't use for:
1. **Simple calculations** - Basic math, string concat
2. **Already fast operations** - Small arrays
3. **Values used once** - No benefit

## 🎨 Advanced Example: Multiple Dependencies

```typescript
function DataDashboard({ users, filters, sortOrder }) {
  // Complex processing with multiple dependencies
  const processedData = useMemo(() => {
    let result = [...users];
    
    // Filter
    result = result.filter(user => {
      return Object.entries(filters).every(([key, value]) =>
        user[key] === value
      );
    });
    
    // Sort
    result.sort((a, b) => {
      return sortOrder === 'asc' 
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
    
    return result;
  }, [users, filters, sortOrder]);
  
  return <Table data={processedData} />;
}
```

## 🚨 Common Mistakes

### Mistake 1: Overusing useMemo

```typescript
// ❌ Unnecessary - Simple operation
const doubled = useMemo(() => count * 2, [count]);

// ✅ Just use regular calculation
const doubled = count * 2;
```

### Mistake 2: Missing Dependencies

```typescript
// ❌ Wrong - Missing multiplier dependency
const result = useMemo(() => count * multiplier, [count]);

// ✅ Correct - Include all dependencies
const result = useMemo(() => count * multiplier, [count, multiplier]);
```

### Mistake 3: Memoizing Everything

```typescript
// ❌ Over-optimization
const a = useMemo(() => x + 1, [x]);
const b = useMemo(() => y + 1, [y]);
const c = useMemo(() => z + 1, [z]);

// ✅ Only memoize expensive operations
const a = x + 1;
const b = y + 1;
const expensiveResult = useMemo(() => heavyComputation(z), [z]);
```

## 💡 useMemo vs useCallback

```typescript
// useMemo: Memoizes the RETURN VALUE
const memoizedValue = useMemo(() => computeValue(), [deps]);

// useCallback: Memoizes the FUNCTION
const memoizedFn = useCallback(() => doSomething(), [deps]);

// These are equivalent:
useCallback(fn, deps) === useMemo(() => fn, deps)
```

## ⚡ Real-World Use Cases

### 1. Filtering and Sorting
```typescript
const filteredData = useMemo(() => 
  data.filter(item => item.active).sort((a, b) => a.name - b.name),
  [data]
);
```

### 2. Complex Calculations
```typescript
const statistics = useMemo(() => ({
  mean: data.reduce((sum, val) => sum + val, 0) / data.length,
  median: calculateMedian(data),
  mode: calculateMode(data)
}), [data]);
```

### 3. Preventing Child Re-renders
```typescript
const childProps = useMemo(() => ({
  items: expensiveTransform(rawItems),
  config: { theme, locale }
}), [rawItems, theme, locale]);

return <MemoizedChild {...childProps} />;
```

## ✅ Best Practices

1. **Measure first** - Use React DevTools Profiler
2. **Profile performance** - Don't guess
3. **Include dependencies** - Use ESLint exhaustive-deps rule
4. **Avoid premature optimization** - Add when needed
5. **Keep computation pure** - No side effects

## 🔍 Performance Example

```typescript
function ExpensiveList({ items, threshold }) {
  // Without useMemo
  const expensiveItems = items.filter(item => item.price > threshold);
  // Runs on EVERY render! 😱
  
  // With useMemo
  const expensiveItems = useMemo(
    () => items.filter(item => item.price > threshold),
    [items, threshold]
  );
  // Only runs when items or threshold change! 🚀
  
  return <div>{expensiveItems.map(...)}</div>;
}
```

## 🎯 When NOT to Use

- Simple, fast calculations
- Values that change every render anyway
- Premature optimization
- No performance measurement done

## 🎓 Summary

- `useMemo` caches expensive computation results
- Only recomputes when dependencies change
- Use for expensive transformations, not simple calculations
- Must include all dependencies in the array
- Pairs well with `React.memo` to prevent re-renders
- Measure performance before optimizing
- Returns the computed value, not a function
