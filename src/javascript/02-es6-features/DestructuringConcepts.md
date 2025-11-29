# Destructuring

## 📖 What is Destructuring?

Destructuring is a JavaScript expression that makes it possible to unpack values from arrays or properties from objects into distinct variables. It's **EVERYWHERE** in React!

---

## 🎯 Array Destructuring

### Basic Syntax
```javascript
const fruits = ['apple', 'banana', 'cherry'];

// Without destructuring
const first = fruits[0];
const second = fruits[1];

// With destructuring
const [first, second] = fruits;
console.log(first);  // 'apple'
console.log(second); // 'banana'
```

### Skip Elements
```javascript
const numbers = [1, 2, 3, 4, 5];
const [first, , third] = numbers;
console.log(first);  // 1
console.log(third);  // 3
```

### Rest Pattern
```javascript
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest);  // [2, 3, 4, 5]
```

### Default Values
```javascript
const [a = 1, b = 2] = [10];
console.log(a); // 10
console.log(b); // 2 (default)
```

---

## 🎯 Object Destructuring ⭐ **CRITICAL for React!**

### Basic Syntax
```javascript
const person = {
    name: 'Alice',
    age: 25,
    city: 'New York'
};

// Without destructuring
const name = person.name;
const age = person.age;

// With destructuring
const { name, age } = person;
console.log(name); // 'Alice'
console.log(age);  // 25
```

### Renaming Variables
```javascript
const person = { name: 'Bob', age: 30 };

const { name: userName, age: userAge } = person;
console.log(userName); // 'Bob'
console.log(userAge);  // 30
```

### Default Values
```javascript
const { name = 'Guest', age = 18 } = { name: 'Alice' };
console.log(name); // 'Alice'
console.log(age);  // 18 (default)
```

### Nested Destructuring
```javascript
const user = {
    name: 'Alice',
    address: {
        city: 'New York',
        zip: '10001'
    }
};

const { name, address: { city, zip } } = user;
console.log(city); // 'New York'
console.log(zip);  // '10001'
```

---

## 🚀 React-Specific Patterns

### 1. **Function Parameters** (Most Common!)
```javascript
// Component props destructuring
function UserCard({ name, age, email }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
        </div>
    );
}

// Usage
<UserCard name="Alice" age={25} email="alice@example.com" />
```

### 2. **useState Hook**
```javascript
// Array destructuring with useState
const [count, setCount] = useState(0);
const [user, setUser] = useState({ name: '', age: 0 });
```

### 3. **Event Handlers**
```javascript
function handleSubmit(event) {
    event.preventDefault();
    const { target } = event;
    const { value } = target.elements.username;
    console.log(value);
}
```

### 4. **API Response**
```javascript
async function fetchUser() {
    const response = await fetch('/api/user');
    const { data, error } = await response.json();
    
    if (error) {
        console.error(error);
    } else {
        console.log(data);
    }
}
```

### 5. **Array Methods with Destructuring**
```javascript
const users = [
    { id: 1, name: 'Alice', active: true },
    { id: 2, name: 'Bob', active: false }
];

// Destructure in map
const names = users.map(({ name }) => name);
// ['Alice', 'Bob']

// Destructure in filter
const activeUsers = users.filter(({ active }) => active);
```

---

## 💡 Advanced Patterns

### Rest in Objects
```javascript
const person = {
    name: 'Alice',
    age: 25,
    city: 'New York',
    country: 'USA'
};

const { name, ...rest } = person;
console.log(name); // 'Alice'
console.log(rest); // { age: 25, city: 'New York', country: 'USA' }
```

### Combining with Spread
```javascript
const defaults = { theme: 'light', lang: 'en' };
const userPrefs = { theme: 'dark' };

const settings = { ...defaults, ...userPrefs };
// { theme: 'dark', lang: 'en' }
```

### Dynamic Property Names
```javascript
const key = 'name';
const { [key]: value } = { name: 'Alice', age: 25 };
console.log(value); // 'Alice'
```

---

## ⚠️ Common Mistakes

### 1. **Destructuring undefined**
```javascript
// ❌ Bad - Will error if user is undefined
const { name } = user;

// ✅ Good - Provide default
const { name } = user || {};
// or
const { name } = user ?? {};
```

### 2. **Reassigning const**
```javascript
// ❌ Bad - Can't reassign const
const { name } = person;
name = 'Bob'; // Error!

// ✅ Good - Use let if you need to reassign
let { name } = person;
name = 'Bob'; // OK
```

### 3. **Missing Parentheses**
```javascript
// ❌ Bad - Syntax error
{ name } = person;

// ✅ Good - Need parentheses when not declaring
({ name } = person);

// ✅ Better - Declare with const/let
const { name } = person;
```

---

## 🎓 Real React Examples

### Component with Props Destructuring
```javascript
function TodoItem({ todo, onDelete, onToggle }) {
    const { id, text, completed } = todo;
    
    return (
        <div className={completed ? 'completed' : ''}>
            <span onClick={() => onToggle(id)}>{text}</span>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
}
```

### Custom Hook with Destructuring
```javascript
function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue;
    });
    
    return [value, setValue];
}

// Usage
const [user, setUser] = useLocalStorage('user', null);
```

### Context API
```javascript
const { user, login, logout } = useContext(AuthContext);
```

---

## 📊 Quick Reference

| Pattern | Example | Use Case |
|---------|---------|----------|
| Array destructuring | `const [a, b] = arr` | useState, array returns |
| Object destructuring | `const { name } = obj` | Props, API responses |
| Rename | `const { name: n } = obj` | Avoid name conflicts |
| Default values | `const { x = 10 } = obj` | Optional properties |
| Rest pattern | `const { a, ...rest } = obj` | Separate specific props |
| Nested | `const { a: { b } } = obj` | Deep object access |

---

## ✅ Summary

- **Array destructuring**: Extract values from arrays into variables
- **Object destructuring**: Extract properties from objects into variables
- **Used EVERYWHERE in React**: Props, hooks, state, events
- **Makes code cleaner**: Less repetitive, more readable
- **Supports defaults**: Provide fallback values
- **Works with rest/spread**: Powerful combinations

**Master destructuring - it's essential for modern React development!** 🚀
