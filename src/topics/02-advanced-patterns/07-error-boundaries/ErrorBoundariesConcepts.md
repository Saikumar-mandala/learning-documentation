# Error Boundaries

## 🛡️ What are they?

Components that catch JavaScript errors in their child component tree and display a fallback UI.

## ⚠️ Important

Must be **class components** (no hooks equivalent yet).

## ✅ Pattern

\`\`\`tsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
\`\`\`
