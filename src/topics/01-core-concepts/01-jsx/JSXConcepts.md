# JSX Concepts

## 🎭 What is JSX?

JSX stands for **JavaScript XML**. It allows us to write HTML-like code directly within JavaScript.

It is **NOT** HTML. It is syntax sugar for `React.createElement(component, props, ...children)`.

## 🧱 Syntax Basics

### 1. Expressions
You can embed any valid JavaScript expression inside curly braces `{}`.

\`\`\`tsx
const name = "React";
const element = <h1>Hello, {name}!</h1>;
\`\`\`

### 2. Attributes
-   Use camelCase for attributes (e.g., `className` instead of `class`, `tabIndex` instead of `tabindex`).
-   String literals: `src="image.png"`
-   Expressions: `src={user.avatarUrl}`

### 3. Children
Tags can contain children, just like HTML.

\`\`\`tsx
<div>
  <h1>Title</h1>
  <p>Description</p>
</div>
\`\`\`

## 🧩 Fragments

A component must return a **single parent element**. If you don't want to add an extra `<div>` to the DOM, use a **Fragment**.

\`\`\`tsx
// Long syntax
<React.Fragment>
  <ChildA />
  <ChildB />
</React.Fragment>

// Short syntax (commonly used)
<>
  <ChildA />
  <ChildB />
</>
\`\`\`

## 🔀 Conditional Rendering in JSX

You can't use `if-else` statements *inside* JSX, but you can use:

1.  **Ternary Operator**: `condition ? true : false`
2.  **Logical AND**: `condition && true`

\`\`\`tsx
<div>
  {isLoggedIn ? <UserDashboard /> : <LoginButton />}
  {hasError && <ErrorMessage />}
</div>
\`\`\`

## 📋 Rendering Lists

Use `.map()` to transform an array of data into an array of elements.

\`\`\`tsx
const items = ['Apple', 'Banana', 'Cherry'];

<ul>
  {items.map((item) => (
    <li key={item}>{item}</li>
  ))}
</ul>
\`\`\`
