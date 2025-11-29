# Array Methods

## 📖 Essential Array Methods for React

Array methods are **CRITICAL** for React development. You'll use them constantly for rendering lists, filtering data, transforming data, and more.

---

## 🎯 The Big 4 (Must Master!)

### 1. **map()** - Transform Each Item ⭐⭐⭐

Creates a new array by transforming each element.

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]

// With objects
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];
const names = users.map(user => user.name);
// ['Alice', 'Bob']
```

**React Usage:**
```jsx
{users.map(user => (
    <div key={user.id}>{user.name}</div>
))}
```

### 2. **filter()** - Keep Only Matching Items ⭐⭐⭐

Creates a new array with elements that pass a test.

```javascript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4]

const users = [
    { name: 'Alice', age: 25, active: true },
    { name: 'Bob', age: 30, active: false },
    { name: 'Charlie', age: 35, active: true }
];

const activeUsers = users.filter(user => user.active);
// [{ name: 'Alice', ... }, { name: 'Charlie', ... }]
```

**React Usage:**
```jsx
{todos.filter(todo => !todo.completed).map(todo => (
    <TodoItem key={todo.id} todo={todo} />
))}
```

### 3. **find()** - Get First Match ⭐⭐

Returns the first element that matches the condition.

```javascript
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

const user = users.find(u => u.id === 2);
// { id: 2, name: 'Bob' }

const notFound = users.find(u => u.id === 99);
// undefined
```

**React Usage:**
```javascript
const selectedUser = users.find(u => u.id === selectedId);
```

### 4. **reduce()** - Combine Into Single Value ⭐⭐

Reduces an array to a single value.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, n) => acc + n, 0);
// 15

// Count occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
// { apple: 3, banana: 2, orange: 1 }
```

---

## 🔧 Other Important Methods

### 5. **forEach()** - Execute for Each Item

```javascript
const numbers = [1, 2, 3];
numbers.forEach(n => console.log(n));
// Logs: 1, 2, 3

// ⚠️ Note: forEach doesn't return anything!
```

### 6. **some()** - Test if ANY Match

```javascript
const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some(n => n % 2 === 0);
// true

const users = [
    { name: 'Alice', admin: false },
    { name: 'Bob', admin: true }
];
const hasAdmin = users.some(u => u.admin);
// true
```

### 7. **every()** - Test if ALL Match

```javascript
const numbers = [2, 4, 6, 8];
const allEven = numbers.every(n => n % 2 === 0);
// true

const users = [
    { name: 'Alice', verified: true },
    { name: 'Bob', verified: false }
];
const allVerified = users.every(u => u.verified);
// false
```

### 8. **includes()** - Check if Contains

```javascript
const fruits = ['apple', 'banana', 'orange'];
fruits.includes('banana'); // true
fruits.includes('grape');  // false

const numbers = [1, 2, 3, 4, 5];
numbers.includes(3); // true
```

### 9. **findIndex()** - Get Index of First Match

```javascript
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

const index = users.findIndex(u => u.id === 2);
// 1

const notFound = users.findIndex(u => u.id === 99);
// -1
```

### 10. **slice()** - Get Portion of Array

```javascript
const numbers = [1, 2, 3, 4, 5];
const portion = numbers.slice(1, 4);
// [2, 3, 4]

const lastTwo = numbers.slice(-2);
// [4, 5]

// ⚠️ slice() doesn't modify original array!
```

### 11. **concat()** - Combine Arrays

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = arr1.concat(arr2);
// [1, 2, 3, 4, 5, 6]

// Modern way with spread operator
const combined = [...arr1, ...arr2];
```

---

## 🚀 Chaining Methods (React Pattern!)

One of the most powerful features - chain multiple methods together:

```javascript
const users = [
    { name: 'Alice', age: 25, active: true },
    { name: 'Bob', age: 30, active: false },
    { name: 'Charlie', age: 35, active: true },
    { name: 'David', age: 28, active: true }
];

// Get names of active users over 25, sorted
const result = users
    .filter(user => user.active)        // Keep only active
    .filter(user => user.age > 25)      // Keep only over 25
    .map(user => user.name)             // Get just names
    .sort();                             // Sort alphabetically
// ['Charlie', 'David']
```

**React Example:**
```jsx
{products
    .filter(p => p.inStock)
    .filter(p => p.price < 100)
    .map(p => (
        <ProductCard key={p.id} product={p} />
    ))
}
```

---

## ⚠️ Common Mistakes

### 1. **Forgetting to Return in map()**
```javascript
// ❌ Bad - No return!
const doubled = numbers.map(n => {
    n * 2;  // Missing return!
});

// ✅ Good
const doubled = numbers.map(n => {
    return n * 2;
});

// ✅ Better - Implicit return
const doubled = numbers.map(n => n * 2);
```

### 2. **Mutating Original Array**
```javascript
// ❌ Bad - Mutates original
const numbers = [1, 2, 3];
numbers.push(4);  // Modifies original!

// ✅ Good - Creates new array
const newNumbers = [...numbers, 4];
```

### 3. **Using forEach When You Need a Return Value**
```javascript
// ❌ Bad - forEach returns undefined
const doubled = numbers.forEach(n => n * 2);
// undefined

// ✅ Good - Use map
const doubled = numbers.map(n => n * 2);
```

---

## 💡 React-Specific Patterns

### Pattern 1: Rendering Lists
```jsx
function UserList({ users }) {
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}
```

### Pattern 2: Conditional Rendering with Filter
```jsx
function TodoList({ todos, showCompleted }) {
    return (
        <div>
            {todos
                .filter(todo => showCompleted || !todo.completed)
                .map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))
            }
        </div>
    );
}
```

### Pattern 3: Transforming Data
```jsx
function ProductGrid({ products }) {
    const discountedProducts = products.map(product => ({
        ...product,
        price: product.price * 0.9  // 10% discount
    }));
    
    return (
        <div>
            {discountedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
```

### Pattern 4: Aggregating Data
```jsx
function ShoppingCart({ items }) {
    const total = items.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);
    
    return <div>Total: ${total.toFixed(2)}</div>;
}
```

---

## 📊 Quick Reference Table

| Method | Returns | Mutates Original? | Use Case |
|--------|---------|-------------------|----------|
| `map()` | New array | ❌ No | Transform each item |
| `filter()` | New array | ❌ No | Keep matching items |
| `find()` | Single item | ❌ No | Get first match |
| `reduce()` | Single value | ❌ No | Combine into one value |
| `forEach()` | undefined | ❌ No | Execute for each (side effects) |
| `some()` | boolean | ❌ No | Test if any match |
| `every()` | boolean | ❌ No | Test if all match |
| `includes()` | boolean | ❌ No | Check if contains |
| `slice()` | New array | ❌ No | Get portion |
| `concat()` | New array | ❌ No | Combine arrays |

---

## 🎓 Practice Challenges

### Challenge 1: Basic Transformation
```javascript
const numbers = [1, 2, 3, 4, 5];
// Get all even numbers, doubled
```

### Challenge 2: Object Manipulation
```javascript
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];
// Get names of users over 25
```

### Challenge 3: Complex Chaining
```javascript
const products = [
    { name: 'Laptop', price: 1000, category: 'electronics', inStock: true },
    { name: 'Phone', price: 500, category: 'electronics', inStock: false },
    { name: 'Desk', price: 300, category: 'furniture', inStock: true },
    { name: 'Chair', price: 200, category: 'furniture', inStock: true }
];
// Get names of in-stock furniture items under $250
```

### Solutions:
```javascript
// 1.
const result = numbers.filter(n => n % 2 === 0).map(n => n * 2);
// [4, 8]

// 2.
const names = users.filter(u => u.age > 25).map(u => u.name);
// ['Bob', 'Charlie']

// 3.
const items = products
    .filter(p => p.category === 'furniture')
    .filter(p => p.inStock)
    .filter(p => p.price < 250)
    .map(p => p.name);
// ['Chair']
```

---

## ✅ Summary

- **map()** - Transform every item (most common in React!)
- **filter()** - Keep only matching items
- **find()** - Get first matching item
- **reduce()** - Combine into single value
- **Chain methods** for powerful data transformations
- **Always return** new arrays (don't mutate!)
- **Master these** - you'll use them in every React app!
