# useState Hook - Concept Explanation

## 📦 What is useState?

`useState` is a **React Hook** that lets you add state variables to functional components. Before hooks, state could only be used in class components. Now, with `useState`, you can manage component state in a simple and elegant way.

## 🎯 Basic Syntax

\`\`\`typescript
const [state, setState] = useState(initialValue);
\`\`\`

- **state**: The current value of the state
- **setState**: A function to update the state
- **initialValue**: The initial value when the component first renders

## 🔑 Key Concepts

### 1. **State Persistence**
State values persist between component re-renders. When the component re-renders, React remembers the state value.

### 2. **Immutability**
Never mutate state directly! Always use the setter function to update state.

\`\`\`typescript
// ❌ Wrong - Direct mutation
count = count + 1;

// ✅ Correct - Using setter function
setCount(count + 1);
\`\`\`

### 3. **Asynchronous Updates**
State updates are batched and asynchronous. Don't expect state to update immediately.

\`\`\`typescript
setCount(count + 1);
console.log(count); // This will show the OLD value!
\`\`\`

### 4. **Functional Updates**
When new state depends on previous state, use the functional form:

\`\`\`typescript
// ✅ Better - Functional update
setCount(prevCount => prevCount + 1);
\`\`\`

## 📚 Common Patterns

### Pattern 1: Simple Value State
\`\`\`typescript
const [name, setName] = useState('');
const [age, setAge] = useState(0);
const [isActive, setIsActive] = useState(false);
\`\`\`

### Pattern 2: Object State
\`\`\`typescript
const [user, setUser] = useState({
  name: 'John',
  age: 25,
  email: 'john@example.com'
});

// Update object - spread operator
setUser({ ...user, age: 26 });
\`\`\`

### Pattern 3: Array State
\`\`\`typescript
const [items, setItems] = useState([]);

// Add item
setItems([...items, newItem]);

// Remove item
setItems(items.filter(item => item.id !== idToRemove));
\`\`\`

### Pattern 4: Lazy Initialization
\`\`\`typescript
// Expensive computation only runs once
const [data, setData] = useState(() => {
  return expensiveComputation();
});
\`\`\`

## ⚡ Real-World Use Cases

1. **Form inputs** - Track user input in forms
2. **Counters** - Increment/decrement values
3. **Toggle states** - Show/hide modals, menus
4. **Lists** - Add/remove/update items
5. **User preferences** - Theme, language settings
6. **Loading states** - Show loading indicators
7. **Error handling** - Display error messages

## 🚨 Common Mistakes

### Mistake 1: Mutating State Directly
\`\`\`typescript
// ❌ Wrong
user.name = 'Jane';
setUser(user);

// ✅ Correct
setUser({ ...user, name: 'Jane' });
\`\`\`

### Mistake 2: Not Using Functional Updates
\`\`\`typescript
// ❌ Problematic with rapid updates
setCount(count + 1);
setCount(count + 1); // May not work as expected

// ✅ Better
setCount(prev => prev + 1);
setCount(prev => prev + 1); // Works correctly
\`\`\`

### Mistake 3: Too Many State Variables
\`\`\`typescript
// ❌ Too fragmented
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');

// ✅ Better - Group related state
const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  phone: ''
});
\`\`\`

## 💡 Best Practices

1. **Keep state minimal** - Only store what you need
2. **Group related state** - Use objects for related values
3. **Use functional updates** - When new state depends on old state
4. **Avoid redundant state** - Don't store derived values
5. **Initialize properly** - Set appropriate initial values
6. **Consider lazy initialization** - For expensive computations

## 🔄 Re-rendering Behavior

Components re-render when:
- State is updated (even if value is the same)
- Parent component re-renders
- Context value changes

React uses **Object.is** comparison to determine if state changed.

\`\`\`typescript
// Won't trigger re-render if same value
setCount(5);
setCount(5); // No re-render
\`\`\`

## 🎓 Summary

- `useState` adds state to functional components
- Returns an array: [currentValue, updaterFunction]
- State persists between renders
- Always use setter function to update state
- Use functional updates for state that depends on previous state
- State updates are asynchronous and batched
- Component re-renders when state changes
