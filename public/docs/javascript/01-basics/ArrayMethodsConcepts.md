# Array Methods

## 📖 Why Array Methods?

Arrays are the heart of data manipulation in React. Whether you're rendering a list of components, filtering search results, or calculating totals, you'll use array methods constantly.

---

## 🎯 Essential Methods for React

### 1. `map()` ⭐ **Used EVERYWHERE**
Creates a new array by transforming every element in the original array.

**React Use Case:** Rendering lists of components.

```javascript
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

// Transform objects into strings
const names = users.map(user => user.name);
// ['Alice', 'Bob']

// React Example
const UserList = () => (
    <ul>
        {users.map(user => (
            <li key={user.id}>{user.name}</li>
        ))}
    </ul>
);
```

### 2. `filter()` ⭐ **CRITICAL**
Creates a new array with all elements that pass the test implemented by the provided function.

**React Use Case:** Deleting items, searching/filtering lists.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

// Keep only even numbers
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4, 6]

// React Example: Delete Item
const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
};
```

### 3. `reduce()` ⭐ **POWERFUL**
Executes a reducer function on each element of the array, resulting in a single output value.

**React Use Case:** Calculating totals, transforming data structures.

```javascript
const cart = [
    { id: 1, price: 100 },
    { id: 2, price: 50 },
    { id: 3, price: 25 }
];

// Calculate total price
const total = cart.reduce((sum, item) => sum + item.price, 0);
// 175

// Advanced: Grouping objects
const people = [
    { name: 'Alice', role: 'Admin' },
    { name: 'Bob', role: 'User' },
    { name: 'Charlie', role: 'Admin' }
];

const byRole = people.reduce((acc, person) => {
    const { role } = person;
    if (!acc[role]) acc[role] = [];
    acc[role].push(person);
    return acc;
}, {});
// { 
//   Admin: [{name: 'Alice'...}, {name: 'Charlie'...}], 
//   User: [{name: 'Bob'...}] 
// }
```

### 4. `find()`
Returns the **first** element in the array that satisfies the provided testing function.

**React Use Case:** Selecting a specific item to edit/view.

```javascript
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

const user = users.find(u => u.id === 2);
// { id: 2, name: 'Bob' }
```

### 5. `includes()`
Determines whether an array includes a certain value among its entries.

**React Use Case:** Conditional rendering based on permissions or tags.

```javascript
const roles = ['admin', 'editor'];
const canEdit = roles.includes('admin'); // true

// React Example
const Button = () => (
    <button disabled={!roles.includes('admin')}>
        Delete
    </button>
);
```

---

## 💡 Other Useful Methods

### `some()` & `every()`
- `some()`: Checks if **at least one** element passes the test.
- `every()`: Checks if **all** elements pass the test.

```javascript
const numbers = [1, 2, 3, 4, 5];

const hasEven = numbers.some(n => n % 2 === 0); // true
const allEven = numbers.every(n => n % 2 === 0); // false
```

### `sort()`
Sorts the elements of an array **in place** and returns the reference to the same array.

**⚠️ Warning:** `sort()` mutates the original array! In React, always copy the array first.

```javascript
const numbers = [3, 1, 4, 1, 5];

// ❌ Bad in React (Mutates state directly)
// numbers.sort();

// ✅ Good in React (Sorts a copy)
const sorted = [...numbers].sort((a, b) => a - b);
```

### `slice()`
Returns a shallow copy of a portion of an array into a new array object.

```javascript
const fruits = ['apple', 'banana', 'cherry', 'date'];

const topTwo = fruits.slice(0, 2); // ['apple', 'banana']
const lastTwo = fruits.slice(-2);  // ['cherry', 'date']
```

---

## ⚠️ Common Mistakes

### 1. Mutating State Directly
Methods like `push`, `pop`, `shift`, `unshift`, `splice`, and `sort` mutate the array. Avoid using them directly on React state.

```javascript
// ❌ Bad
const addItem = (item) => {
    items.push(item); // Mutates state!
    setItems(items);  // React won't re-render
};

// ✅ Good
const addItem = (item) => {
    setItems([...items, item]); // Creates new array
};
```

### 2. Forgetting Return in `map` or `filter`
If you use curly braces in an arrow function, you MUST use `return`.

```javascript
// ❌ Bad - Returns [undefined, undefined...]
const doubled = numbers.map(n => {
    n * 2;
});

// ✅ Good
const doubled = numbers.map(n => {
    return n * 2;
});

// ✅ Better (Implicit return)
const doubled = numbers.map(n => n * 2);
```

---

## 🎓 Real React Examples

### Search Filter
```javascript
function SearchList({ items }) {
    const [query, setQuery] = useState('');

    // Filter items based on search query
    const filteredItems = items.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <input 
                value={query} 
                onChange={e => setQuery(e.target.value)} 
                placeholder="Search..."
            />
            <ul>
                {filteredItems.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}
```

### Shopping Cart Total
```javascript
function CartTotal({ cart }) {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div className="total">
            <h3>Total: ${total.toFixed(2)}</h3>
        </div>
    );
}
```

---

## ✅ Summary

| Method | Purpose | Returns | Mutates? |
|--------|---------|---------|----------|
| `map` | Transform elements | New Array | ❌ No |
| `filter` | Select elements | New Array | ❌ No |
| `reduce` | Calculate value | Single Value | ❌ No |
| `find` | Find element | Element / undefined | ❌ No |
| `push` | Add to end | New Length | ✅ Yes |
| `pop` | Remove from end | Removed Element | ✅ Yes |
| `splice` | Add/Remove | Removed Elements | ✅ Yes |
| `slice` | Copy part | New Array | ❌ No |

**Master `map`, `filter`, and `reduce` - they are the holy trinity of React data manipulation!** 🚀
