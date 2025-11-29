# Functions Mastery

## 🔨 Types of Functions

### 1. Function Declaration
Hoisted (can be used before definition).

```javascript
function add(a, b) {
    return a + b;
}
```

### 2. Function Expression
Not hoisted. Assigned to a variable.

```javascript
const subtract = function(a, b) {
    return a - b;
};
```

### 3. Arrow Functions (ES6)
Concise, implicit return, lexical `this`. **Preferred in React.**

```javascript
const multiply = (a, b) => a * b;
```

---

## 🎁 Default Parameters

Set default values for arguments if they are `undefined`.

**React Use Case:** Default props or fallback values in helper functions.

```javascript
// Old way
function greet(name) {
    name = name || 'Guest';
    return 'Hello ' + name;
}

// ✅ ES6 Way
const greet = (name = 'Guest') => `Hello ${name}`;

console.log(greet()); // "Hello Guest"
console.log(greet("Alice")); // "Hello Alice"
```

---

## 🔄 Higher-Order Functions (HOF)

A function that **takes a function as an argument** OR **returns a function**.

### 1. Taking a Function (Callback)
Common in array methods and event handlers.

```javascript
const numbers = [1, 2, 3];

// map takes a function
const doubled = numbers.map(n => n * 2);

// React Event Handler
<button onClick={() => console.log('Clicked')}>Click</button>
```

### 2. Returning a Function (Currying)
Useful for event handlers with arguments.

```javascript
const createMultiplier = (multiplier) => {
    return (number) => number * multiplier;
};

const double = createMultiplier(2);
console.log(double(5)); // 10

// React Example: Dynamic Handler
const handleChange = (field) => (event) => {
    setState({ ...state, [field]: event.target.value });
};

<input onChange={handleChange('email')} />
```

---

## ⚠️ Common Mistakes

### 1. Executing Function Instead of Passing It
In React events, pass the function reference, don't call it immediately.

```javascript
// ❌ Wrong (Calls immediately on render)
<button onClick={handleClick()}>Click Me</button>

// ✅ Correct (Passes reference)
<button onClick={handleClick}>Click Me</button>

// ✅ Correct (Arrow wrapper)
<button onClick={() => handleClick(id)}>Click Me</button>
```
