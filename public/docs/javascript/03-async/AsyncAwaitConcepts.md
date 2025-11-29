# Async/Await & Promises

## 📖 What is Asynchronous JavaScript?

Asynchronous code allows JavaScript to perform long-running operations without blocking the main thread. **CRITICAL** for React apps that fetch data from APIs!

---

## 🎯 Promises

A Promise represents a value that may not be available yet but will be resolved in the future.

### Promise States
- **Pending**: Initial state, neither fulfilled nor rejected
- **Fulfilled**: Operation completed successfully
- **Rejected**: Operation failed

### Basic Promise
```javascript
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve('Data loaded!');
        } else {
            reject('Error loading data');
        }
    }, 1000);
});

// Using the promise
promise
    .then(result => console.log(result))
    .catch(error => console.error(error));
```

### Chaining Promises
```javascript
fetch('/api/user')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return fetch(`/api/posts/${data.id}`);
    })
    .then(response => response.json())
    .then(posts => console.log(posts))
    .catch(error => console.error(error));
```

---

## 🎯 Async/Await ⭐ **MUST KNOW for React!**

Async/await makes asynchronous code look and behave like synchronous code.

### Basic Syntax
```javascript
async function fetchUser() {
    try {
        const response = await fetch('/api/user');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}
```

### Key Rules
1. **`async` keyword**: Marks a function as asynchronous
2. **`await` keyword**: Pauses execution until promise resolves
3. **Always use try/catch**: Handle errors properly
4. **Returns a promise**: Async functions always return promises

---

## 🚀 React-Specific Patterns

### 1. **Fetching Data in useEffect**
```javascript
function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/api/users/${userId}`);
                const data = await response.json();
                setUser(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [userId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return <div>{user.name}</div>;
}
```

### 2. **Event Handlers**
```javascript
function TodoForm() {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('/api/todos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title })
            });
            
            const newTodo = await response.json();
            console.log('Created:', newTodo);
            setTitle('');
        } catch (error) {
            console.error('Failed to create todo:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}
```

### 3. **Multiple Parallel Requests**
```javascript
useEffect(() => {
    const fetchData = async () => {
        try {
            // Run in parallel
            const [users, posts, comments] = await Promise.all([
                fetch('/api/users').then(r => r.json()),
                fetch('/api/posts').then(r => r.json()),
                fetch('/api/comments').then(r => r.json())
            ]);

            setData({ users, posts, comments });
        } catch (error) {
            setError(error.message);
        }
    };

    fetchData();
}, []);
```

### 4. **Custom Hook for Data Fetching**
```javascript
function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}

// Usage
function UserList() {
    const { data, loading, error } = useFetch('/api/users');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return <ul>{data.map(user => <li key={user.id}>{user.name}</li>)}</ul>;
}
```

---

## 💡 Advanced Patterns

### Promise.all() - Run in Parallel
```javascript
const fetchAllData = async () => {
    const [users, posts] = await Promise.all([
        fetch('/api/users').then(r => r.json()),
        fetch('/api/posts').then(r => r.json())
    ]);
    
    return { users, posts };
};
```

### Promise.race() - First to Complete
```javascript
const fetchWithTimeout = async (url, timeout = 5000) => {
    const fetchPromise = fetch(url);
    const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Timeout')), timeout)
    );
    
    return Promise.race([fetchPromise, timeoutPromise]);
};
```

### Sequential Requests
```javascript
const fetchUserAndPosts = async (userId) => {
    // Wait for user first
    const user = await fetch(`/api/users/${userId}`).then(r => r.json());
    
    // Then fetch posts (depends on user data)
    const posts = await fetch(`/api/posts?userId=${user.id}`).then(r => r.json());
    
    return { user, posts };
};
```

---

## ⚠️ Common Mistakes

### 1. **Forgetting await**
```javascript
// ❌ Bad - Doesn't wait for promise
async function bad() {
    const data = fetch('/api/data'); // Returns promise, not data!
    console.log(data); // Promise object
}

// ✅ Good - Waits for promise
async function good() {
    const response = await fetch('/api/data');
    const data = await response.json();
    console.log(data); // Actual data
}
```

### 2. **Using async in useEffect directly**
```javascript
// ❌ Bad - useEffect can't be async
useEffect(async () => {
    const data = await fetchData();
}, []);

// ✅ Good - Create async function inside
useEffect(() => {
    const loadData = async () => {
        const data = await fetchData();
    };
    loadData();
}, []);
```

### 3. **Not handling errors**
```javascript
// ❌ Bad - No error handling
async function bad() {
    const data = await fetch('/api/data');
}

// ✅ Good - Try/catch
async function good() {
    try {
        const data = await fetch('/api/data');
    } catch (error) {
        console.error(error);
    }
}
```

### 4. **Forgetting to return**
```javascript
// ❌ Bad - Doesn't return the data
async function bad() {
    const data = await fetch('/api/data').then(r => r.json());
    // Forgot to return!
}

// ✅ Good - Returns the data
async function good() {
    const data = await fetch('/api/data').then(r => r.json());
    return data;
}
```

---

## 📊 Quick Reference

| Feature | Promise | Async/Await |
|---------|---------|-------------|
| Syntax | `.then().catch()` | `try/catch` |
| Readability | Chaining can be messy | Looks synchronous |
| Error handling | `.catch()` | `try/catch` |
| Debugging | Harder | Easier |
| Best for | Simple cases | Complex logic |

---

## 🎓 Real React Examples

### Complete CRUD Operations
```javascript
function TodoApp() {
    const [todos, setTodos] = useState([]);

    // CREATE
    const addTodo = async (title) => {
        try {
            const response = await fetch('/api/todos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, completed: false })
            });
            const newTodo = await response.json();
            setTodos([...todos, newTodo]);
        } catch (error) {
            console.error('Failed to add todo:', error);
        }
    };

    // READ
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch('/api/todos');
                const data = await response.json();
                setTodos(data);
            } catch (error) {
                console.error('Failed to fetch todos:', error);
            }
        };
        fetchTodos();
    }, []);

    // UPDATE
    const toggleTodo = async (id) => {
        try {
            const todo = todos.find(t => t.id === id);
            const response = await fetch(`/api/todos/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...todo, completed: !todo.completed })
            });
            const updated = await response.json();
            setTodos(todos.map(t => t.id === id ? updated : t));
        } catch (error) {
            console.error('Failed to update todo:', error);
        }
    };

    // DELETE
    const deleteTodo = async (id) => {
        try {
            await fetch(`/api/todos/${id}`, { method: 'DELETE' });
            setTodos(todos.filter(t => t.id !== id));
        } catch (error) {
            console.error('Failed to delete todo:', error);
        }
    };

    return (
        <div>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={() => toggleTodo(todo.id)}
                    onDelete={() => deleteTodo(todo.id)}
                />
            ))}
        </div>
    );
}
```

---

## ✅ Summary

- **Promises**: Represent future values
- **Async/Await**: Makes async code look synchronous
- **Always use try/catch**: Handle errors properly
- **useEffect**: Create async function inside
- **Promise.all()**: Run multiple requests in parallel
- **Critical for React**: Data fetching, API calls, side effects

**Master async/await - it's essential for modern React apps!** 🚀
