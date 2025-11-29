# useTransition

## ⏳ What is it?

`useTransition` lets you mark state updates as **non-urgent** (transitions), keeping the UI responsive during expensive renders.

## 🎯 The Problem

Some state updates cause expensive re-renders that block the UI:
- Filtering/searching large lists
- Complex calculations
- Heavy component trees

This makes the app feel slow and unresponsive.

## ✅ The Solution

\`\`\`tsx
const [isPending, start Transition] = useTransition();

// Urgent: Update immediately
setInput(value);

// Non-urgent: Can be interrupted
startTransition(() => {
  setFilteredList(expensiveFilter(value));
});
\`\`\`

## 🔑 Key Concepts

1. **Urgent Updates**: Input fields, clicks, immediate feedback
2. **Non-Urgent Updates** (Transitions): Expensive renders that can wait
3. **isPending**: Boolean flag while transition is in progress
4. **Interruptible**: React can pause transitions for urgent updates

## 💡 When to Use

- **Search/Filter**: Keep input responsive while filtering large lists
- **Tab Switching**: Switch tabs immediately, load content in background
- **Routing**: Navigate while loading heavy components

## ⚠️ Important

- Transitions only affect **state updates** inside `startTransition()`
- Urgent updates always take priority
- Great for improving perceived performance
