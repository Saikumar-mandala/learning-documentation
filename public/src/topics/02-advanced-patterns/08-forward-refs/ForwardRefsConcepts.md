# Forward Refs

## 🔗 What are they?

`forwardRef` lets you expose a DOM node or imperative handle to a parent component via ref.

## ✅ Pattern

\`\`\`tsx
const CustomInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});
\`\`\`

## 💡 Use Cases

- Focus management
- Scroll to element
- Measure DOM nodes
- Integration with `useImperativeHandle`
