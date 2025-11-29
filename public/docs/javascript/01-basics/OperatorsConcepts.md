# Operators

## ➕ Arithmetic & Assignment

Basic math is essential for calculating totals, indexes, and styling.

```javascript
let score = 10;
score += 5; // 15
score++;    // 16
```

---

## ⚖️ Comparison Operators

### `==` vs `===` (The Golden Rule)
Always use `===` (Strict Equality). It checks both **value** and **type**.

```javascript
5 == "5"  // ✅ true (Type coercion - Bad!)
5 === "5" // ❌ false (Different types - Good!)
```

**React Use Case:** Conditional rendering.
```javascript
{status === 'active' && <ActiveBadge />}
```

---

## 🔀 Logical Operators

### 1. `&&` (AND) - Short Circuit Evaluation
Used heavily in React for conditional rendering.

```javascript
// If user.isLoggedIn is true, render the Welcome component
{user.isLoggedIn && <WelcomeUser />}
```

### 2. `||` (OR) - Default Values
Used to provide fallbacks.

```javascript
const displayName = user.name || "Guest";
```

### 3. `??` (Nullish Coalescing)
Better than `||` for default values because it only falls back on `null` or `undefined` (not `0` or `false`).

```javascript
const count = 0;
const display = count || 10; // 10 (Oops! 0 is falsy)
const fixed = count ?? 10;   // 0 (Correct!)
```

### 4. `!` (NOT)
Flips a boolean.

```javascript
const isEmpty = !items.length;
```

---

## ❓ Ternary Operator

The only way to write `if/else` logic **inside** JSX.

**Syntax:** `condition ? trueValue : falseValue`

```javascript
const Button = ({ isLoggedIn }) => (
    <button>
        {isLoggedIn ? "Logout" : "Login"}
    </button>
);
```

**Nested Ternaries?** Avoid them! They are hard to read. Use a separate function or variable instead.

---

## ⚠️ Common Mistakes

### 1. Using `&&` with Numbers
If the left side is `0`, React will render `0` instead of nothing.

```javascript
// ❌ If count is 0, this renders "0" on screen
{count && <p>Messages: {count}</p>}

// ✅ Fix: Check for length explicitly
{count > 0 && <p>Messages: {count}</p>}
```
