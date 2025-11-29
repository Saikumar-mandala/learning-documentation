# Props Concepts

## 🎁 What are Props?

**Props** (short for properties) are the way we pass data from a parent component to a child component.

-   Props are **read-only** (immutable). A child component cannot modify its own props.
-   They flow **downwards** (unidirectional data flow).

## 📨 Passing Props

You pass props to a component just like you pass attributes to an HTML tag.

\`\`\`tsx
<Welcome name="Alice" age={25} isAdmin={true} />
\`\`\`

## 📥 Receiving Props

Functional components receive props as a single object argument. We usually **destructure** it immediately.

\`\`\`tsx
// Without destructuring
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// With destructuring (Recommended)
function Welcome({ name, age }) {
  return <h1>Hello, {name} (Age: {age})</h1>;
}
\`\`\`

## 🛡️ Prop Types (TypeScript)

In TypeScript, we define an interface to specify what props a component expects. This gives us autocomplete and error checking.

\`\`\`tsx
interface WelcomeProps {
  name: string;
  age: number;
  isAdmin?: boolean; // Optional prop
}

function Welcome({ name, age, isAdmin }: WelcomeProps) {
  // ...
}
\`\`\`

## ⚙️ Default Props

You can assign default values to props during destructuring. This value is used if the prop is `undefined` (not passed).

\`\`\`tsx
function Button({ color = 'blue', text }: ButtonProps) {
  // color will be 'blue' if not provided
}
\`\`\`
