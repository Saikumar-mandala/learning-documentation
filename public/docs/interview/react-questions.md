# React Interview Questions (A to Z)

## A - Components
**Q: What is a Component?**
A: A component is like a building block for your app. It is a piece of UI (User Interface) that you can reuse. For example, a button, a header, or a footer can be a component. In React, components are just JavaScript functions that return HTML (JSX).

## B - Browser vs Virtual DOM
**Q: What is the Virtual DOM?**
A: The Virtual DOM is a lightweight copy of the real DOM (the actual website structure). When you change something in React, it updates the Virtual DOM first. Then, it compares the Virtual DOM with the real DOM and only updates the parts that changed. This makes React very fast.

## C - Class vs Functional Components
**Q: What is the difference between Class and Functional Components?**
A: 
- **Functional Components:** Simple JavaScript functions. They are easier to read and write. We use Hooks (like `useState`) with them.
- **Class Components:** Older way of writing components using `class` syntax. They are more complex and use `this.state`.
*Note: Nowadays, we mostly use Functional Components.*

## C - Context API
**Q: What is the Context API?**
A: Context provides a way to pass data through the component tree without having to pass props down manually at every level (prop drilling).
- **useContext:** The hook to consume context.
```jsx
const ThemeContext = createContext('light');
const theme = useContext(ThemeContext);
```

## C - Custom Hooks
**Q: What are Custom Hooks?**
A: Custom Hooks are JavaScript functions that start with `use` (e.g., `useFetch`). They let you extract component logic (like fetching data) into reusable functions.
```jsx
function useWindowSize() { ... }
```

## D - DOM (Document Object Model)
**Q: What is the DOM?**
A: The DOM is the structure of your webpage. It is like a tree of elements (HTML tags). JavaScript uses the DOM to change what you see on the screen.

## E - Events
**Q: How do you handle events in React?**
A: In React, you handle events like clicks or typing using special attributes like `onClick` or `onChange`. You pass a function to them.
```jsx
<button onClick={handleClick}>Click Me</button>
```

## F - Fragments
**Q: What are Fragments?**
A: React components must return only **one** parent element. If you don't want to add an extra `<div>` to wrap your elements, you can use a Fragment `<> ... </>`. It is invisible in the final HTML.

## H - Hooks
**Q: What are Hooks?**
A: Hooks are special functions that let you use React features (like state) in functional components.
- `useState`: To save data (state).
- `useEffect`: To run code when the component loads or updates (side effects).
- `useContext`: To access global data (Context).
- `useReducer`: For complex state logic (like Redux).
- `useRef`: To access DOM elements or keep values without re-rendering.
- `useMemo`: To cache expensive calculations.
- `useCallback`: To cache functions.

## H - Higher-Order Components (HOC)
**Q: What is a HOC?**
A: A Higher-Order Component is a function that takes a component and returns a new component. It's used to reuse component logic.
```jsx
const EnhancedComponent = withAuth(ProfileComponent);
```

## J - JSX
**Q: What is JSX?**
A: JSX stands for JavaScript XML. It looks like HTML, but it is actually JavaScript. It lets you write HTML tags inside your JavaScript code.
```jsx
const element = <h1>Hello, World!</h1>;
```

## K - Keys
**Q: Why do we need Keys in lists?**
A: When you show a list of items (like in a loop), React needs a unique `key` for each item. This helps React know which items have changed, been added, or removed. It improves performance.
```jsx
{items.map(item => <li key={item.id}>{item.name}</li>)}
```

## L - Lifecycle
**Q: What is the Component Lifecycle?**
A: Every component goes through three main phases:
1. **Mounting:** When the component is first put on the screen.
2. **Updating:** When the component changes (new props or state).
3. **Unmounting:** When the component is removed from the screen.
*We use `useEffect` to handle these in functional components.*

## L - Lazy Loading
**Q: What is Lazy Loading?**
A: It means loading components only when they are needed (not all at once). This makes the app faster.
```jsx
const OtherComponent = React.lazy(() => import('./OtherComponent'));
```

## M - Memoization
**Q: What is Memoization in React?**
A: It is an optimization technique to cache results so they don't need to be re-calculated.
- **React.memo:** Prevents a component from re-rendering if props didn't change.
- **useMemo:** Caches a value.
- **useCallback:** Caches a function.

## P - Props
**Q: What are Props?**
A: Props (short for Properties) are how we pass data from a parent component to a child component. They are like arguments in a function. Props are **read-only** (you cannot change them in the child).

## P - Performance Optimization
**Q: How do you optimize React app performance?**
A:
1. **Code Splitting:** Use `React.lazy` and `Suspense`.
2. **Memoization:** Use `React.memo`, `useMemo`, `useCallback`.
3. **Virtualize Long Lists:** Render only what is visible (e.g., `react-window`).
4. **Avoid Inline Functions:** Define functions outside render if possible.

## P - Portals
**Q: What are Portals?**
A: Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. Great for Modals and Tooltips.
```jsx
ReactDOM.createPortal(child, container)
```

## R - React
**Q: What is React?**
A: React is a JavaScript library for building user interfaces (UI). It is used to build single-page applications (SPAs). It is maintained by Facebook (Meta).

## R - Redux
**Q: What is Redux?**
A: Redux is a state management library. It stores the entire state of your app in a single central place called the **Store**.
- **Store:** Holds the state.
- **Action:** Describes what happened (e.g., `{ type: 'INCREMENT' }`).
- **Reducer:** A function that takes the old state and action, and returns the new state.
- **Dispatch:** How you send an action to the store.
- **Provider:** Wraps your app to give it access to the store.

## R - Refs (useRef)
**Q: What is `useRef`?**
A: `useRef` returns a mutable object (`.current`) that persists across renders.
1. **Access DOM:** Focus an input `inputRef.current.focus()`.
2. **Store Values:** Keep a value that doesn't trigger a re-render when changed.

## R - Router (React Router)
**Q: What is React Router?**
A: It is a standard library for routing in React. It enables navigation among views without refreshing the page.
- `BrowserRouter`: Wraps the app.
- `Routes` & `Route`: Define paths.
- `Link`: Navigation (like `<a>` tag but no refresh).
- `useNavigate`: Hook for programmatic navigation.

## S - State
**Q: What is State?**
A: State is data that belongs to a component. Unlike props, **state can change**. When state changes, React re-renders (updates) the component to show the new data.

## S - Server Side Rendering (SSR) vs Client Side Rendering (CSR)
**Q: What is the difference between SSR and CSR?**
A:
- **CSR (React default):** Browser downloads empty HTML + JS. JS builds the UI. Slower initial load, bad for SEO.
- **SSR (Next.js):** Server builds the HTML and sends it to the browser. Faster initial load, good for SEO.

## U - UseEffect
**Q: What does useEffect do?**
A: `useEffect` lets you perform side effects in your component. Examples of side effects are:
- Fetching data from an API.
- Changing the document title.
- Setting up a timer.
It runs after the component renders.

## V - Virtual DOM
*(See B - Browser vs Virtual DOM)*

---

# Part 2: Common React Coding Challenges

**1. Create a Simple Counter**
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
```

**2. Show/Hide Element (Toggle)**
```jsx
function Toggle() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <p>This is the secret message!</p>}
    </div>
  );
}
```

**3. Fetch Data from API**
```jsx
import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []); // Empty array means run once on mount

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

**4. Controlled Input (Form)**
```jsx
function SimpleForm() {
  const [text, setText] = useState('');

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <p>You typed: {text}</p>
    </div>
  );
}
```
