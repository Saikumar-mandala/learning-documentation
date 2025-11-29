# DOM Manipulation in React

## 🌳 The Virtual DOM

React uses a **Virtual DOM** to optimize updates. You rarely need to touch the real DOM directly.

### Why avoid direct DOM manipulation?
1. **Performance**: React batches updates efficiently. Direct changes might be overwritten by React.
2. **Consistency**: React's state is the "single source of truth". Modifying the DOM breaks this.

---

## 🖱️ When to access the DOM?

Sometimes you *do* need to access the DOM, for example:
- Managing focus (inputs)
- Measuring element size
- Integrating with 3rd party libraries (D3, Maps)
- Playing media (Video/Audio)

### The Solution: `useRef`

Use the `useRef` hook to access DOM elements safely.

```javascript
import { useRef, useEffect } from 'react';

const InputFocus = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        // Focus the input on mount
        inputRef.current.focus();
    }, []);

    return <input ref={inputRef} />;
};
```

---

## ⚠️ Common Mistakes

### 1. Using `document.getElementById`
Avoid selecting elements globally. It breaks component reusability.

```javascript
// ❌ Bad
const handleClick = () => {
    const input = document.getElementById('my-input');
    input.value = '';
};

// ✅ Good (Controlled Component)
const [value, setValue] = useState('');
const handleClick = () => setValue('');
```

### 2. Modifying Styles Directly
Don't change `style` properties manually. Use state or classes.

```javascript
// ❌ Bad
divRef.current.style.display = 'none';

// ✅ Good
<div style={{ display: isVisible ? 'block' : 'none' }} />
```
