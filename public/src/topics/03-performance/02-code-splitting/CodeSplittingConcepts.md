# Code Splitting

## ⚡ What is it?

Code splitting allows you to lazy load components only when they're needed, reducing initial bundle size.

## ✅ Pattern

\`\`\`tsx
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
\`\`\`

## 💡 Best Practices

- Split at route level first
- Use Suspense fallbacks
- Prefetch critical routes
