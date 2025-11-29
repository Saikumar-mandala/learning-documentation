# Context Pattern

## 🌐 What is it?

The Context Pattern provides a way to pass data through the component tree without prop drilling.

## ✅ When to Use

- **Global State**: Theme, auth, language
- **Cross-cutting Concerns**: User preferences, feature flags
- **Deeply Nested Components**: Avoid prop drilling

## 💡 Implementation

\`\`\`tsx
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  return useContext(ThemeContext);
}
\`\`\`

## ⚡ Performance Tips

1. **Split contexts**: Separate frequently changing data
2. **Memoize values**: Use `useMemo` for provider value
3. **Co-locate state**: Keep state close to where it's used
