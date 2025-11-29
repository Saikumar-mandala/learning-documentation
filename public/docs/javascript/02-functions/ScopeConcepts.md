# Scope, Closures & `this`

## 🔭 Scope

Scope determines where variables are accessible.

### 1. Global Scope
Accessible everywhere. Avoid polluting this!

### 2. Function Scope (`var`)
Variables declared with `var` are accessible anywhere inside the function.

### 3. Block Scope (`let`, `const`)
Variables accessible only inside the `{}` block (if, for, switch).

```javascript
if (true) {
    let blockScoped = "Hidden";
    var functionScoped = "Visible";
}

// console.log(blockScoped); // ❌ Error
console.log(functionScoped); // ✅ "Visible"
```

---

## 🔒 Closures

A closure is a function that **remembers** the variables from its outer scope even after that scope has finished executing.

**React Use Case:** `useState`, `useEffect`, and event handlers rely heavily on closures.

```javascript
function createCounter() {
    let count = 0; // Private variable
    
    return () => {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
// count is not accessible directly!
```

**React Example:** Stale Closures
Be careful! If a closure captures an old state value, it won't see updates.

```javascript
useEffect(() => {
    const timer = setInterval(() => {
        console.log(count); // ⚠️ Might always print initial 0
    }, 1000);
    return () => clearInterval(timer);
}, []); // Missing dependency 'count'
```

---

## 👈 The `this` Keyword

In React (Functional Components), we rarely use `this`. However, it's crucial for understanding legacy code or class components.

### 1. Global Context
In a browser, `this` refers to `window`.

### 2. Object Method
`this` refers to the object calling the method.

```javascript
const user = {
    name: "Alice",
    greet() {
        console.log(this.name);
    }
};
user.greet(); // "Alice"
```

### 3. Arrow Functions (Lexical `this`)
Arrow functions **don't** have their own `this`. They inherit it from the surrounding scope.

```javascript
const user = {
    name: "Alice",
    // ❌ Arrow function breaks 'this' here
    greet: () => {
        console.log(this.name); // undefined (or window.name)
    }
};
```

**React Tip:** This is why we use Arrow Functions for event handlers in Class Components—to keep `this` bound to the component instance.
