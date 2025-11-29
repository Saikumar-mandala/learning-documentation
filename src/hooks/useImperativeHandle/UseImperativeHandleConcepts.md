# useImperativeHandle

## 🎮 What is it?

`useImperativeHandle` customizes the instance value that is exposed to parent components when using `ref`.

Normally, when you use `ref` with a DOM element, you get the DOM node itself. But sometimes you want to hide the DOM node and expose only a specific set of methods (an API) to the parent.

## 🤝 Relationship with forwardRef

It is almost always used with `forwardRef`.

\`\`\`tsx
const MyInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = '';
    }
  }));

  return <input ref={inputRef} />;
});
\`\`\`

## ⚠️ When to use it?

**Rarely.** In most cases, you should use props to control child components. `useImperativeHandle` is an "escape hatch" for when you imperatively need to trigger a method on a child (like `focus()`, `scrollIntoView()`, or triggering an animation).
