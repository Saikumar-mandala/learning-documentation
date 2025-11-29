# Objects Mastery

## 📦 Object Essentials

Objects are collections of key-value pairs. In React, `props` and `state` are objects.

### 1. Property Shorthand
If the key and variable name are the same, you can omit the value.

```javascript
const name = "Alice";
const age = 25;

// Old
const user = { name: name, age: age };

// ✅ ES6
const user = { name, age };
```

### 2. Computed Property Names
Dynamic keys.

```javascript
const key = "role";
const user = {
    [key]: "Admin"
};
// { role: "Admin" }
```

---

## 🛠️ Object Methods

### 1. `Object.keys()`
Returns an array of keys.

```javascript
const user = { name: "Alice", age: 25 };
Object.keys(user); // ["name", "age"]
```

### 2. `Object.values()`
Returns an array of values.

```javascript
Object.values(user); // ["Alice", 25]
```

### 3. `Object.entries()`
Returns an array of `[key, value]` pairs. Great for iterating over objects in React!

```javascript
Object.entries(user).map(([key, value]) => (
    <div key={key}>
        {key}: {value}
    </div>
));
```

### 4. `Object.freeze()`
Prevents modification. Useful for constants.

```javascript
const config = Object.freeze({ API_URL: "https://api.com" });
// config.API_URL = "new"; // ❌ Error in strict mode
```

---

## ❓ Optional Chaining (`?.`)

Safely access nested properties without checking for existence at each level.

**React Use Case:** Accessing API data that might be incomplete.

```javascript
const user = { profile: { address: null } };

// ❌ Crash if address is missing
// const city = user.profile.address.city; 

// ✅ Safe
const city = user.profile?.address?.city; // undefined (no crash)
```

---

## ⚠️ Common Mistakes

### 1. Mutating Objects
Objects are reference types. Modifying them directly affects all references.

```javascript
const user1 = { name: "Alice" };
const user2 = user1;

user2.name = "Bob";
console.log(user1.name); // "Bob" (Oops!)
```

**Fix:** Always copy objects in React state!
```javascript
const newUser = { ...user1, name: "Bob" };
```

### 2. Deep Copy vs Shallow Copy
Spread operator `...` only does a **shallow** copy (1 level deep). Nested objects are still references.

```javascript
const user = { settings: { theme: "dark" } };
const copy = { ...user };

copy.settings.theme = "light";
console.log(user.settings.theme); // "light" (Nested object mutated!)
```

**Fix:** Use `structuredClone(user)` or libraries like Lodash for deep copies.
