# ES6 Modules

## 📦 Import & Export

Modules allow you to split your code into separate files. This is fundamental to React development.

### 1. Named Exports
Export multiple items from a file.

```javascript
// utils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Component.js
import { add, subtract } from './utils';
```

### 2. Default Export
Export one main item per file.

```javascript
// Button.js
const Button = () => <button>Click</button>;
export default Button;

// App.js
import Button from './Button'; // Name it whatever you want
```

### 3. Mixed Exports
You can have both.

```javascript
// api.js
export const API_URL = 'https://api.com';
export default function fetchData() { ... }

// App.js
import fetchData, { API_URL } from './api';
```

---

## ⚠️ Common Mistakes

### 1. Wrong Braces `{}`
- **Named Export**: MUST use `{}`. Name must match exactly.
- **Default Export**: NO `{}`. Name can be anything.

```javascript
// ❌ Error (if Button is default export)
import { Button } from './Button'; 

// ✅ Correct
import Button from './Button';
```

### 2. File Extensions
In React (Vite/Webpack), you can usually omit `.js` or `.tsx` extensions.

```javascript
import Button from './Button'; // Auto-resolves to Button.tsx or Button.js
```
