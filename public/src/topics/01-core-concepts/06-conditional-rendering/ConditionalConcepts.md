# Conditional Rendering

## 🔀 The Basics

In React, you can conditionally render UI using standard JavaScript operators.

## 1. `if` Statement (Early Return)

Best for when you want to render *nothing* or a completely different view based on a condition.

\`\`\`tsx
if (isLoading) {
  return <Spinner />;
}
return <Content />;
\`\`\`

## 2. Ternary Operator (`? :`)

Best for toggling between two elements inline.

\`\`\`tsx
{isLoggedIn ? <Dashboard /> : <LoginButton />}
\`\`\`

## 3. Logical AND (`&&`)

Best for rendering something **only if** a condition is true, otherwise nothing.

\`\`\`tsx
{hasError && <ErrorMessage />}
\`\`\`

### ⚠️ The `0` Pitfall
Be careful with numbers! `0` is falsy in JavaScript, but React **will render** the number `0`.

\`\`\`tsx
// ❌ WRONG: Renders "0" if count is 0
{count && <h1>Messages: {count}</h1>}

// ✅ CORRECT: Check explicitly
{count > 0 && <h1>Messages: {count}</h1>}
\`\`\`

## 4. Preventing Rendering (`null`)

Return `null` from a component to hide it completely.

\`\`\`tsx
function Banner({ show }) {
  if (!show) return null;
  return <div>I am visible!</div>;
}
\`\`\`
