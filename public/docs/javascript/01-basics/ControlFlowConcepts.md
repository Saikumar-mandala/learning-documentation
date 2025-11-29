# Control Flow

## 🚦 Conditionals

### 1. `if` / `else`
Standard logic control. In React, use this **outside** the return statement to return different components early.

```javascript
const UserProfile = ({ user, loading }) => {
    // Early return pattern
    if (loading) {
        return <Spinner />;
    }

    if (!user) {
        return <ErrorMessage />;
    }

    return <div>{user.name}</div>;
};
```

### 2. `switch`
Useful for multiple conditions, like in **Reducers** (Redux or useReducer).

```javascript
switch (action.type) {
    case 'INCREMENT':
        return { count: state.count + 1 };
    case 'DECREMENT':
        return { count: state.count - 1 };
    default:
        return state;
}
```

---

## 🔁 Loops

### 1. `for` Loop
Classic loop. Rarely used directly in React JSX, but useful for logic functions.

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

### 2. `map()` (The React Loop)
In React, we don't use `for` loops to render lists. We use `map()`.

```javascript
// ❌ Can't do this in JSX
// { for (let item of items) { <div>{item}</div> } }

// ✅ Do this instead
{items.map(item => (
    <div key={item.id}>{item.name}</div>
))}
```

---

## ⚠️ Common Mistakes

### 1. Forgetting `key` in Loops
When rendering lists with `map`, always provide a unique `key` prop.

```javascript
// ❌ React Warning
items.map(item => <li>{item}</li>)

// ✅ Correct
items.map(item => <li key={item.id}>{item}</li>)
```

### 2. Complex Logic in JSX
Don't put complex `if/else` chains inside your JSX. Extract them to a helper function or a variable.

```javascript
// ❌ Hard to read
return (
    <div>
        {isLoaded ? (hasError ? <Error /> : <Content />) : <Loading />}
    </div>
);

// ✅ Better
if (!isLoaded) return <Loading />;
if (hasError) return <Error />;
return <Content />;
```
