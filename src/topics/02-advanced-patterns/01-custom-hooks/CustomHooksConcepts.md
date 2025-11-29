# Custom Hooks - Comprehensive Guide

## 🎣 What are Custom Hooks?

Custom Hooks are **reusable JavaScript functions** that use React Hooks internally. They let you extract component logic into reusable functions, following the same rules as built-in hooks.

## ✅ The Rules of Custom Hooks

1. **Name must start with `use`** - e.g., `useLocalStorage`, `useFetch`, `useAuth`
2. **Can call other hooks** - useState, useEffect, useContext, etc.
3. **Return anything** - values, functions, arrays, objects
4. **Must follow Hook rules** - Only call at top level, only in React functions

## 🎯 Why Create Custom Hooks?

- **Reusability** - Share logic across components
- **Composition** - Combine multiple hooks
- **Abstraction** - Hide complex logic
- **Testing** - Test hooks in isolation
- **Readability** - Clean component code

## 💡 Pattern 1: useLocalStorage

```typescript
function useLocalStorage<T>(key: string, initialValue: T) {
  // Initialize from localStorage
  const [value, setValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Update localStorage when value changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }, [key, value]);

  return [value, setValue] as const;
}

// Usage
function Component() {
  const [name, setName] = useLocalStorage('username', '');
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  
  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}
```

## 💡 Pattern 2: useFetch

```typescript
function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        
        if (!cancelled) {
          setData(json);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err as Error);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [url]);

  return { data, loading, error };
}

// Usage
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(`/api/users/${userId}`);
  
  if (loading) return <Spinner />;
  if (error) return <Error message={error.message} />;
  
  return <div>{user.name}</div>;
}
```

## 💡 Pattern 3: useDebounce

```typescript
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// Usage
function SearchComponent() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    // Only searches when user stops typing for 500ms
    if (debouncedQuery) {
      searchAPI(debouncedQuery);
    }
  }, [debouncedQuery]);

  return <input value={query} onChange={e => setQuery(e.target.value)} />;
}
```

## 💡 Pattern 4: useWindowSize

```typescript
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

// Usage
function ResponsiveComponent() {
  const { width } = useWindowSize();
  
  return (
    <div>
      {width < 768 ? <MobileView /> : <DesktopView />}
    </div>
  );
}
```

## 💡 Pattern 5: useToggle

```typescript
function useToggle(initialValue: boolean = false) {
  const [value, setValue] = useState(initialValue);
  
  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);
  
  return [value, toggle, setValue] as const;
}

// Usage
function Modal() {
  const [isOpen, toggle, setIsOpen] = useToggle();
  
  return (
    <>
      <button onClick={toggle}>Toggle Modal</button>
      {isOpen && <ModalContent onClose={() => setIsOpen(false)} />}
    </>
  );
}
```

## ⚡ Real-World Custom Hooks

### 1. useAuth
```typescript
function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Login, logout, check auth status
  const login = async (credentials) => { /* ... */ };
  const logout = () => { /* ... */ };
  
  return { user, loading, login, logout };
}
```

### 2. useForm
```typescript
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  
  return { values, errors, handleChange, /* validation */ };
}
```

### 3. useMedia
```typescript
function useMedia(query: string) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );
  
  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);
  
  return matches;
}
```

## 🚨 Common Mistakes

### Mistake 1: Not Following Naming Convention

```typescript
// ❌ Wrong - Doesn't start with 'use'
function getWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  // ...
}

// ✅ Correct
function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  // ...
}
```

### Mistake 2: Violating Hook Rules

```typescript
// ❌ Wrong - Conditional hook call
function useData(shouldFetch) {
  if (shouldFetch) {
    const [data, setData] = useState(null); // Error!
  }
}

// ✅ Correct
function use Data(shouldFetch) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    if (shouldFetch) {
      // Fetch data
    }
  }, [shouldFetch]);
}
```

## ✅ Best Practices

1. **Keep hooks focused** - Single responsibility
2. **Name clearly** - Describe what it does
3. **Document parameters** - Add JSDoc comments
4. **Return consistent structure** - Array or object
5. **Handle cleanup** - Return cleanup functions
6. **Type properly** - Use TypeScript generics
7. **Test thoroughly** - Unit test hooks

## 🎓 Summary

- Custom Hooks extract reusable logic
- Must start with `use` prefix
- Can combine multiple built-in hooks
- Perfect for API calls, local storage, event listeners
- Follow same rules as built-in hooks
- Return values, functions, or both
- Improve code reusability and readability
