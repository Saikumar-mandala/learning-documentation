# useDebugValue

## 🐞 What is it?

`useDebugValue` is a hook that allows you to display a label for custom hooks in React DevTools.

It doesn't affect your application's logic or UI at all. It's purely for developer experience.

## 📝 Usage

\`\`\`tsx
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  
  // Shows "Online" or "Offline" next to the hook in DevTools
  useDebugValue(isOnline ? 'Online' : 'Offline');
  
  return isOnline;
}
\`\`\`

## 🐢 Lazy Formatting

If calculating the debug value is expensive (e.g., parsing a date or formatting a large object), you can pass a formatting function as a second argument.

\`\`\`tsx
useDebugValue(date, date => date.toDateString());
\`\`\`
