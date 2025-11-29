# Spread & Rest Operators

## 📖 What are Spread & Rest Operators?

The spread (`...`) and rest (`...`) operators use the same syntax but serve different purposes. They're **CRITICAL** for React development!

---

## 🎯 Spread Operator (`...`)

The spread operator **expands** an iterable (array, object, string) into individual elements.

### 1. **Array Spreading**

#### Copying Arrays
```javascript
const original = [1, 2, 3];
const copy = [...original];

copy.push(4);
console.log(original); // [1, 2, 3] - unchanged!
console.log(copy);     // [1, 2, 3, 4]
```

#### Combining Arrays
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
// [1, 2, 3, 4, 5, 6]

// Add elements while combining
const withExtra = [0, ...arr1, 3.5, ...arr2, 7];
// [0, 1, 2, 3, 3.5, 4, 5, 6, 7]
```

#### Function Arguments
```javascript
const numbers = [1, 5, 3, 9, 2];
console.log(Math.max(...numbers)); // 9

// Without spread
console.log(Math.max(numbers)); // NaN
```

### 2. **Object Spreading** ⭐ **CRITICAL for React!**

#### Copying Objects
```javascript
const original = { name: 'Alice', age: 25 };
const copy = { ...original };

copy.age = 26;
console.log(original.age); // 25 - unchanged!
console.log(copy.age);     // 26
```

#### Merging Objects
```javascript
const defaults = { theme: 'light', lang: 'en' };
const userPrefs = { theme: 'dark' };

const settings = { ...defaults, ...userPrefs };
// { theme: 'dark', lang: 'en' }
// Later values override earlier ones!
```

#### Adding/Updating Properties
```javascript
const user = { name: 'Bob', age: 30 };

// Add new property
const withEmail = { ...user, email: 'bob@example.com' };
// { name: 'Bob', age: 30, email: 'bob@example.com' }

// Update existing property
const olderUser = { ...user, age: 31 };
// { name: 'Bob', age: 31 }
```

---

## 🎯 Rest Operator (`...`)

The rest operator **collects** multiple elements into an array.

### 1. **Function Parameters**

```javascript
// Collect all arguments into an array
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}

sum(1, 2, 3);       // 6
sum(1, 2, 3, 4, 5); // 15
```

#### Mix with Regular Parameters
```javascript
function greet(greeting, ...names) {
    return `${greeting} ${names.join(', ')}!`;
}

greet('Hello', 'Alice', 'Bob', 'Charlie');
// 'Hello Alice, Bob, Charlie!'
```

### 2. **Array Destructuring**

```javascript
const [first, second, ...rest] = [1, 2, 3, 4, 5];

console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]
```

### 3. **Object Destructuring**

```javascript
const person = {
    name: 'Alice',
    age: 25,
    city: 'New York',
    country: 'USA'
};

const { name, age, ...address } = person;

console.log(name);    // 'Alice'
console.log(age);     // 25
console.log(address); // { city: 'New York', country: 'USA' }
```

---

## 🚀 React-Specific Patterns

### 1. **Immutable State Updates** ⭐ **CRITICAL!**

```javascript
// Adding to array
const [todos, setTodos] = useState([]);

const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
};

// Removing from array
const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
};

// Updating array item
const updateTodo = (id, updates) => {
    setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, ...updates } : todo
    ));
};
```

### 2. **Props Spreading**

```javascript
const userProps = {
    name: 'Alice',
    age: 25,
    email: 'alice@example.com'
};

// Spread props to component
<UserCard {...userProps} />

// Same as:
<UserCard name="Alice" age={25} email="alice@example.com" />
```

### 3. **Collecting Remaining Props**

```javascript
function Button({ variant, size, ...restProps }) {
    return (
        <button
            className={`btn-${variant} btn-${size}`}
            {...restProps}
        />
    );
}

// Usage
<Button variant="primary" size="lg" onClick={handleClick} disabled>
    Click Me
</Button>
```

### 4. **Merging State**

```javascript
const [user, setUser] = useState({
    name: 'Alice',
    age: 25,
    email: 'alice@example.com'
});

// Update specific fields
const updateUser = (updates) => {
    setUser({ ...user, ...updates });
};

updateUser({ age: 26 }); // Only age changes
```

### 5. **Combining Arrays**

```javascript
const [items, setItems] = useState([1, 2, 3]);

// Prepend
setItems([0, ...items]); // [0, 1, 2, 3]

// Append
setItems([...items, 4]); // [1, 2, 3, 4]

// Insert in middle
const index = 2;
setItems([
    ...items.slice(0, index),
    2.5,
    ...items.slice(index)
]); // [1, 2, 2.5, 3]
```

---

## 💡 Advanced Patterns

### Nested Object Updates
```javascript
const state = {
    user: {
        name: 'Alice',
        address: {
            city: 'New York',
            zip: '10001'
        }
    }
};

// Update nested property
const newState = {
    ...state,
    user: {
        ...state.user,
        address: {
            ...state.user.address,
            city: 'Boston'
        }
    }
};
```

### Conditional Spreading
```javascript
const getButtonProps = (variant, disabled) => ({
    className: 'btn',
    ...(variant && { variant }),
    ...(disabled && { disabled: true })
});

getButtonProps('primary', false);
// { className: 'btn', variant: 'primary' }

getButtonProps(null, true);
// { className: 'btn', disabled: true }
```

### Array Deduplication
```javascript
const numbers = [1, 2, 2, 3, 3, 3, 4];
const unique = [...new Set(numbers)];
// [1, 2, 3, 4]
```

---

## ⚠️ Common Mistakes

### 1. **Shallow Copy Only**
```javascript
const original = {
    name: 'Alice',
    address: { city: 'NYC' }
};

const copy = { ...original };
copy.address.city = 'Boston';

console.log(original.address.city); // 'Boston' - CHANGED!
// Nested objects are still referenced!
```

### 2. **Rest Must Be Last**
```javascript
// ❌ Bad - Rest must be last parameter
function bad(...rest, last) {}

// ✅ Good
function good(first, ...rest) {}
```

### 3. **Can't Spread Non-Iterables**
```javascript
// ❌ Bad - Can't spread number
const arr = [...5]; // Error!

// ✅ Good - Spread array or string
const arr1 = [...[1, 2, 3]];
const arr2 = [...'hello']; // ['h', 'e', 'l', 'l', 'o']
```

---

## 📊 Quick Reference

| Operation | Spread | Rest |
|-----------|--------|------|
| **Purpose** | Expand elements | Collect elements |
| **Arrays** | `[...arr]` | `[a, ...rest] = arr` |
| **Objects** | `{...obj}` | `{a, ...rest} = obj` |
| **Functions** | `fn(...arr)` | `fn(...args)` |
| **React** | Props spreading | Collect remaining props |

---

## 🎓 Real React Examples

### Todo List Manager
```javascript
function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id
                ? { ...todo, completed: !todo.completed }
                : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                    onToggle={() => toggleTodo(todo.id)}
                    onDelete={() => deleteTodo(todo.id)}
                />
            ))}
        </div>
    );
}
```

### Form State Management
```javascript
function UserForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <form>
            <input
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
        </form>
    );
}
```

---

## ✅ Summary

- **Spread (`...`)**: Expands/copies arrays and objects
- **Rest (`...`)**: Collects multiple elements into an array
- **Immutability**: Essential for React state updates
- **Props spreading**: Pass multiple props easily
- **Shallow copy**: Only copies first level
- **Used everywhere**: State updates, props, function arguments

**Master spread/rest - they're fundamental to React development!** 🚀
