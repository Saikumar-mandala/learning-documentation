# useEffect Hook - Concept Explanation

## ⚡ What is useEffect?

`useEffect` is a **React Hook** that lets you perform **side effects** in functional components. It serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in React class components, but unified into a single API.

## 🎯 Basic Syntax

\`\`\`typescript
useEffect(() => {
  // Your side effect code here
  
  return () => {
    // Optional cleanup code here
  };
}, [dependencies]); // Dependency array
\`\`\`

## 🔑 Key Concepts

### 1. **Side Effects**
Side effects are operations that affect something outside the scope of the function being executed. Common examples:
- Fetching data from an API
- Subscribing to events (window resize, scrolling)
- Manually changing the DOM (document.title)
- Setting up timers (setTimeout, setInterval)

### 2. **The Dependency Array**
The second argument to `useEffect` controls *when* the effect runs.

| Dependency Array | Behavior | Class Equivalent |
|------------------|----------|------------------|
| `[]` (Empty) | Runs **only once** after initial render | `componentDidMount` |
| `[prop, state]` | Runs on mount + when any dependency changes | `componentDidUpdate` |
| (Omitted) | Runs **after every single render** | `componentDidMount` + `componentDidUpdate` |

### 3. **Cleanup Function**
If your effect returns a function, React will run it when:
- The component unmounts
- Before re-running the effect (if dependencies changed)

This is crucial for preventing memory leaks!

\`\`\`typescript
useEffect(() => {
  const subscription = props.source.subscribe();
  
  // Cleanup function
  return () => {
    subscription.unsubscribe();
  };
}, [props.source]);
\`\`\`

## 📚 Common Patterns

### Pattern 1: Data Fetching (Run Once)
\`\`\`typescript
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    const json = await response.json();
    setData(json);
  };
  
  fetchData();
}, []); // Empty array = run once
\`\`\`

### Pattern 2: Event Listeners (With Cleanup)
\`\`\`typescript
useEffect(() => {
  const handleResize = () => setWidth(window.innerWidth);
  
  window.addEventListener('resize', handleResize);
  
  // Cleanup is MANDATORY here!
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
\`\`\`

### Pattern 3: Responding to Prop/State Changes
\`\`\`typescript
useEffect(() => {
  // Runs whenever 'userId' changes
  fetchUserInfo(userId);
}, [userId]);
\`\`\`

## 🚨 Common Mistakes

### Mistake 1: Missing Dependencies
If you use a variable inside `useEffect` but don't list it in dependencies, you'll have stale closures (old values).

\`\`\`typescript
// ❌ Wrong
useEffect(() => {
  console.log(count); // Uses 'count'
}, []); // But 'count' is missing here!

// ✅ Correct
useEffect(() => {
  console.log(count);
}, [count]);
\`\`\`

### Mistake 2: Infinite Loops
Updating a state inside `useEffect` that is also a dependency causes infinite loops.

\`\`\`typescript
// ❌ Infinite Loop!
useEffect(() => {
  setCount(count + 1);
}, [count]); // Changing count triggers effect -> changes count -> triggers effect...
\`\`\`

### Mistake 3: Not Cleaning Up
Forgetting to clean up subscriptions or timers leads to memory leaks and weird bugs.

\`\`\`typescript
// ❌ Memory Leak Risk
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick');
  }, 1000);
  // No cleanup! Timer keeps running even after component unmounts
}, []);

// ✅ Correct
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick');
  }, 1000);
  
  return () => clearInterval(timer);
}, []);
\`\`\`

## 💡 Best Practices

1.  **Always include all dependencies**: Use ESLint plugin `react-hooks/exhaustive-deps` to help you.
2.  **One effect per concern**: Don't stuff unrelated logic into a single `useEffect`. Split them up!
3.  **Use cleanup functions**: Whenever you set up a listener, subscription, or timer.
4.  **Avoid objects/arrays as dependencies**: If created inside the component body, they are new references on every render, causing the effect to run unnecessarily. Use `useMemo` if needed.

## 🔄 Lifecycle Visualization

1.  **Mount**: Component renders -> DOM updates -> `useEffect` runs.
2.  **Update**: State/Props change -> Component renders -> DOM updates -> **Cleanup runs** (for old effect) -> **New `useEffect` runs**.
3.  **Unmount**: Component is removed -> **Cleanup runs**.
