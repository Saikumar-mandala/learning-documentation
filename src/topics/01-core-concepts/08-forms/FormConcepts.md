# Forms in React

## 🎮 Controlled Components

In HTML, form elements like `<input>`, `<textarea>`, and `<select>` maintain their own state.
In React, mutable state is kept in the `state` property of components, and only updated with `setState()`.

We combine the two by making the React state the **"single source of truth"**.

\`\`\`tsx
const [value, setValue] = useState('');

<input 
  value={value} 
  onChange={(e) => setValue(e.target.value)} 
/>
\`\`\`

-   **Value**: Controlled by React state.
-   **Change**: Updates React state.

## 🔓 Uncontrolled Components

Sometimes you don't need to control every keystroke. You can use a **Ref** to access the DOM element directly when needed (e.g., on submit).

\`\`\`tsx
const inputRef = useRef(null);

const handleSubmit = () => {
  alert(inputRef.current.value);
};

<input ref={inputRef} />
\`\`\`

## 📝 Handling Multiple Inputs

Instead of separate state variables for each input, you can use a single object.

\`\`\`tsx
const [formData, setFormData] = useState({
  firstName: '',
  lastName: ''
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};

<input name="firstName" onChange={handleChange} />
<input name="lastName" onChange={handleChange} />
\`\`\`
