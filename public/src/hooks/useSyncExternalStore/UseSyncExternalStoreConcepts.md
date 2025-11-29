# useSyncExternalStore

## 🔌 What is it?

`useSyncExternalStore` is a hook for subscribing to external data sources (stores) that exist outside of React.

## 🎯 Why do we need it?

External stores include:
- Browser APIs (`window.matchMedia`, `navigator.onLine`)
- Third-party state management (Zustand, Redux without hooks)
- Custom global stores

React 18's concurrent rendering can cause "tearing" where different parts of the UI show different versions of the external data.

## ✅ Usage

\`\`\`tsx
const value = useSyncExternalStore(
  subscribe,    // Function to subscribe to store
  getSnapshot,  // Function to get current value
  getServerSnapshot? // Optional: SSR value
);
\`\`\`

## 📝 Example: Online Status

\`\`\`tsx
const isOnline = useSyncExternalStore(
  (callback) => {
    window.addEventListener('online', callback);
    window.addEventListener('offline', callback);
    return () => {
      window.removeEventListener('online', callback);
      window.removeEventListener('offline', callback);
    };
  },
  () => navigator.onLine
);
\`\`\`

## 🔑 Key Points

- Ensures consistent reads across concurrent renders
- Works with any external mutable source
- Typically wrapped in a custom hook
