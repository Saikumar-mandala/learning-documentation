# Component Concepts

## 🧩 What is a Component?

Components are the building blocks of any React application. They let you split the UI into independent, reusable pieces, and think about each piece in isolation.

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.

## 🔄 Functional vs Class Components

### Functional Components (Modern)
Just a JavaScript function. Simple, concise, and uses **Hooks** for state and side effects.

\`\`\`tsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
\`\`\`

### Class Components (Legacy)
ES6 classes that extend `React.Component`. More verbose. Uses `this.state` and lifecycle methods (`componentDidMount`, etc.).

\`\`\`tsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
\`\`\`

> **Note:** We focus on Functional Components in this course as they are the modern standard.

## 📦 Composition

Composition is the act of combining smaller components to build more complex ones.

### The `children` Prop
React components automatically receive a special prop named `children`. This allows you to pass elements *inside* your component tags.

\`\`\`tsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

// Usage
<Card>
  <h1>Title</h1>
  <p>Content</p>
</Card>
\`\`\`

## 🧼 Pure Components

A component is "pure" if:
1.  It renders the same output for the same props and state.
2.  It has no side effects (like modifying variables outside its scope during render).

React assumes your components are pure.
