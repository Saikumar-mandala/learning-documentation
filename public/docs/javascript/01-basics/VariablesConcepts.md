# Variables & Data Types

## 📦 Variables: `let`, `const`, & `var`

In modern JavaScript (ES6+), we rarely use `var`. Instead, we use `let` and `const`.

### 1. `const` (Constant)
Use this by default! It declares a variable that cannot be reassigned.

**React Use Case:** Components, functions, imports, and values that shouldn't change.

```javascript
const appName = "My React App";
// appName = "New Name"; // ❌ Error: Assignment to constant variable.

const calculateTotal = (a, b) => a + b;
```

> **Note:** Objects/Arrays declared with `const` CAN be mutated, but not reassigned.
> ```javascript
> const user = { name: "Alice" };
> user.name = "Bob"; // ✅ Allowed
> // user = { name: "Bob" }; // ❌ Error
> ```

### 2. `let` (Block Scoped)
Use this only when you need to reassign a value.

**React Use Case:** Loop counters, toggle states (inside logic, not React state).

```javascript
let count = 0;
count = 1; // ✅ Allowed
```

### 3. `var` (Function Scoped)
**Avoid using `var`!** It has confusing scoping rules (hoisting) and can lead to bugs.

---

## 🧬 Data Types

JavaScript has dynamic typing. Here are the key types you'll use in React:

### Primitives (Immutable)
- **String**: `"Hello"`, `'World'`, `` `Backticks` ``
- **Number**: `42`, `3.14`, `NaN`
- **Boolean**: `true`, `false`
- **Null**: Intentionally empty value (`user = null`)
- **Undefined**: Uninitialized variable
- **Symbol**: Unique identifiers (rare in basic React)

### Reference Types (Mutable)
- **Object**: `{ name: "Alice", age: 25 }`
- **Array**: `[1, 2, 3]`
- **Function**: `() => {}`

---

## ⚠️ Common Mistakes

### 1. Mutating State Directly
In React, never modify objects/arrays directly if they are in state.

```javascript
const [user, setUser] = useState({ name: "Alice" });

// ❌ Wrong
user.name = "Bob";

// ✅ Correct
setUser({ ...user, name: "Bob" });
```

### 2. `null` vs `undefined`
- `undefined`: The variable exists but has no value.
- `null`: You explicitly set it to "nothing".

**React Tip:** When fetching data, start with `null` to show a loading spinner.

```javascript
const [data, setData] = useState(null);

if (!data) return <Spinner />;
```
