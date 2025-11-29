# useReducer Hook - Comprehensive Guide

## 🎯 What is useReducer?

`useReducer` is a React Hook for managing complex state logic. It's an alternative to `useState` that gives you more control over state updates, especially when dealing with complex state objects or when the next state depends on the previous state.

## 📚 When to Use useReducer vs useState

### Use `useState` when:
- State is simple (numbers, strings, booleans)
- State updates are independent
- No complex update logic

### Use `useReducer` when:
- State is complex (nested objects, arrays)
- Multiple sub-values in state
- Next state depends on previous state
- Complex state update logic
- Multiple actions update the same state

## 🔑 Basic Syntax

```typescript
const [state, dispatch] = useReducer(reducer, initialState);
```

- **state**: Current state value
- **dispatch**: Function to trigger state updates
- **reducer**: Function that determines how state changes
- **initialState**: Initial state value

## 📋 Reducer Function Pattern

```typescript
function reducer(state, action) {
  switch (action.type) {
    case 'ACTION_TYPE':
      return { ...state, /* updates */ };
    default:
      return state;
  }
}
```

## 💡 Complete Example: Counter

```typescript
// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

// Component
function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}
```

## 🎨 Action with Payload

```typescript
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    default:
      return state;
  }
}

// Usage
dispatch({ type: 'ADD_TODO', payload: newTodo });
dispatch({ type: 'REMOVE_TODO', payload: todoId });
```

## ⚡ Real-World Use Cases

1. **Form Management** - Complex forms with validation
2. **Shopping Cart** - Add/remove/update items
3. **Todo Lists** - CRUD operations
4. **Wizards** - Multi-step forms
5. **Game State** - Score, lives, level
6. **API States** - Loading, success, error states

## 🚨 Common Mistakes

### Mistake 1: Mutating State

```typescript
// ❌ Wrong - Mutates existing state
case 'ADD_ITEM':
  state.items.push(action.payload);
  return state;

// ✅ Correct - Returns new state
case 'ADD_ITEM':
  return {
    ...state,
    items: [...state.items, action.payload]
  };
```

### Mistake 2: Not Returning State

```typescript
// ❌ Wrong - No return value
case 'UPDATE':
  { ...state, value: action.payload }

// ✅ Correct
case 'UPDATE':
  return { ...state, value: action.payload };
```

### Mistake 3: Missing Default Case

```typescript
// ❌ Wrong - No default case
function reducer(state, action) {
  switch (action.type) {
    case 'ACTION':
      return newState;
  }
}

// ✅ Correct
function reducer(state, action) {
  switch (action.type) {
    case 'ACTION':
      return newState;
    default:
      return state; // or throw error
  }
}
```

## 💡 Best Practices

1. **Keep reducers pure** - No side effects, API calls, or randomness
2. **Use TypeScript** - Type actions and state for safety
3. **Extract reducer** - Keep components clean
4. **Use action constants** - Avoid typos
5. **Validate actions** - Throw errors for unknown types
6. **Keep state normalized** - Avoid deeply nested structures

## 🎓 Advanced: Lazy Initialization

```typescript
function init(initialCount) {
  return { count: initialCount };
}

const [state, dispatch] = useReducer(reducer, initialCount, init);
```

## 📊 useReducer + Context Pattern

Perfect for global state management without Redux:

```typescript
const StateContext = createContext();
const DispatchContext = createContext();

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}
```

## 🎓 Summary

- `useReducer` manages complex state with reducers
- Reducer function: `(state, action) => newState`
- Dispatch actions to update state
- Actions have `type` and optional `payload`
- Reducers must be pure functions
- Great for complex state logic and multiple related values
- Pairs well with Context API for global state
