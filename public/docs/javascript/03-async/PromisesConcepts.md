# Asynchronous JavaScript: Callbacks & Promises

## ⏳ Callbacks

A callback is a function passed into another function to be executed later.

**React Use Case:** Event handlers, `useEffect` cleanup, and passing data from child to parent.

```javascript
// 1. Simple Callback
function greet(name, callback) {
    console.log('Hi ' + name);
    callback();
}

greet('Alice', () => console.log('Done!'));

// 2. React Parent-Child Communication
const Child = ({ onAction }) => (
    <button onClick={onAction}>Click Me</button>
);

const Parent = () => {
    const handleAction = () => console.log('Child clicked!');
    return <Child onAction={handleAction} />;
};
```

**The Problem:** Callback Hell (Nested callbacks are hard to read).

---

## 🤝 Promises

A Promise represents a value that may be available now, later, or never.

### States
1. **Pending**: Initial state.
2. **Fulfilled**: Operation successful (`resolve`).
3. **Rejected**: Operation failed (`reject`).

```javascript
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) resolve("Data loaded!");
        else reject("Error!");
    }, 1000);
});

fetchData
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

### `Promise.all()`
Run multiple promises in parallel.

**React Use Case:** Fetching data from multiple APIs at once.

```javascript
const [users, posts] = await Promise.all([
    fetch('/api/users'),
    fetch('/api/posts')
]);
```

---

## ⚡ Async/Await (The Modern Way)

Syntactic sugar over Promises. Makes async code look synchronous.

```javascript
const getData = async () => {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};
```

---

## ⚠️ Common Mistakes

### 1. Forgetting `await`
If you forget `await`, you get a Promise object, not the data.

```javascript
const response = fetch('/api/data');
console.log(response); // Promise { <pending> } (Oops!)
```

### 2. Async in `useEffect`
You cannot make the `useEffect` callback async directly.

```javascript
// ❌ Wrong
useEffect(async () => {
    const data = await fetchData();
}, []);

// ✅ Correct
useEffect(() => {
    const loadData = async () => {
        const data = await fetchData();
        setData(data);
    };
    loadData();
}, []);
```
