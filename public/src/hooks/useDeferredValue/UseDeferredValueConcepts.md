# useDeferredValue

## ⏱️ What is it?

`useDeferredValue` lets you defer updating a value to keep the UI responsive during expensive re-renders.

## 🎯 Difference from useTransition

| `useTransition` | `useDeferredValue` |
|----------------|-------------------|
| Wraps **setState** calls | Wraps a **value** |
| You control when to defer | React controls when to defer |
| Use when you own the state | Use when you receive props/state |

## ✅ Usage

\`\`\`tsx
const [query, setQuery] = useState('');
const deferredQuery = useDeferredValue(query);

// query updates immediately
// deferredQuery updates after urgent renders
\`\`\`

## 💡 When to Use

- **Search/Filter**: Defer expensive filtering while keeping input responsive
- **Props**: When you receive a value via props that causes expensive renders
- **Visual Feedback**: Show stale content with reduced opacity while updating

## 🔑 Key Insight

The deferred value will lag behind the actual value during updates, allowing urgent UI updates to complete first.
