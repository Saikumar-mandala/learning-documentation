# Higher-Order Components (HOCs)

## 🔄 What are they?

Functions that take a component and return a new component with additional props or behavior.

## ✅ Pattern

\`\`\`tsx
function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const { isAuthenticated } = useAuth();
    if (!isAuthenticated) return <Login />;
    return <Component {...props} />;
  };
}
\`\`\`

## 📌 Note

HOCs are legacy but still useful. Modern alternative: **Custom Hooks**.
