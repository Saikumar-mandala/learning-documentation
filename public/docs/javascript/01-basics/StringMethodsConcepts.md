# String Methods

## 📖 Why String Methods?

In React, you'll constantly work with text: displaying user names, formatting inputs, parsing URLs, or dynamically generating class names. Mastering string methods makes these tasks a breeze.

---

## 🎯 Essential Methods for React

### 1. `includes()` ⭐ **Search & Filter**
Checks if a string contains a specified substring.

**React Use Case:** Implementing search filters or conditional rendering.

```javascript
const text = "Hello React World";

// Case-sensitive check
const hasReact = text.includes("React"); // true
const hasVue = text.includes("Vue");     // false

// React Example: Simple Search
const SearchItem = ({ item, query }) => {
    // Always normalize to lowercase for case-insensitive search
    if (!item.toLowerCase().includes(query.toLowerCase())) {
        return null;
    }
    return <div>{item}</div>;
};
```

### 2. `split()` ⭐ **Parsing Data**
Splits a string into an array of substrings based on a separator.

**React Use Case:** Parsing URL paths, processing CSV data, or formatting dates.

```javascript
const date = "2023-10-15";
const [year, month, day] = date.split("-");
// year="2023", month="10", day="15"

// React Example: Breadcrumbs from URL
const Breadcrumbs = () => {
    const path = "/dashboard/settings/profile";
    const parts = path.split("/").filter(Boolean);
    // ['dashboard', 'settings', 'profile']
    
    return (
        <nav>
            {parts.map(part => <span key={part}>{part} / </span>)}
        </nav>
    );
};
```

### 3. `slice()` & `substring()` ⭐ **Truncating Text**
Extracts a section of a string.

**React Use Case:** Shortening long descriptions or previews.

```javascript
const description = "This is a very long product description that needs truncating.";

// Get first 20 characters
const preview = description.slice(0, 20) + "...";
// "This is a very long..."

// React Example
const Card = ({ text }) => (
    <p>
        {text.length > 50 ? text.slice(0, 50) + "..." : text}
    </p>
);
```

### 4. `replace()` & `replaceAll()` ⭐ **Formatting**
Replaces occurrences of a pattern with a replacement string.

**React Use Case:** Formatting phone numbers, removing special characters, or dynamic URL generation.

```javascript
const url = "https://api.example.com/users/123";
const secureUrl = url.replace("http:", "https:");

// Dynamic routing
const title = "React Hooks Guide";
const slug = title.toLowerCase().replaceAll(" ", "-");
// "react-hooks-guide"
```

### 5. `toLowerCase()` & `toUpperCase()` ⭐ **Normalization**
Converts string case.

**React Use Case:** Normalizing user input for comparison or storage.

```javascript
const input = "  User@Example.COM  ";
const email = input.trim().toLowerCase();
// "user@example.com"
```

### 6. `trim()` ⭐ **Form Handling**
Removes whitespace from both ends of a string.

**React Use Case:** Cleaning up form input before validation or submission.

```javascript
const handleSubmit = (e) => {
    e.preventDefault();
    const cleanUsername = username.trim();
    
    if (!cleanUsername) {
        setError("Username cannot be empty");
        return;
    }
    submitData(cleanUsername);
};
```

---

## 🚀 Template Literals (Backticks)

While not a method, Template Literals are **essential** for string manipulation in React.

### 1. Dynamic Class Names
```javascript
// ❌ Old Way
const className = "btn " + (isActive ? "active" : "");

// ✅ Template Literals
const className = `btn ${isActive ? 'active' : ''}`;
```

### 2. Embedding Variables
```javascript
const UserGreeting = ({ name, count }) => (
    <h1>
        {`Hello ${name}, you have ${count} notifications.`}
    </h1>
);
```

### 3. Multi-line Strings
```javascript
const emailTemplate = `
    Hi ${name},
    
    Welcome to our platform!
    
    Best,
    The Team
`;
```

---

## ⚠️ Common Mistakes

### 1. `replace` only replaces the first match
By default, `replace(" ", "-")` only replaces the *first* space. Use `replaceAll` or Regex with the global flag `/g` for all occurrences.

```javascript
const text = "a b c";

// ❌ Mistake
text.replace(" ", "-"); // "a-b c"

// ✅ Fix
text.replaceAll(" ", "-"); // "a-b-c"
// OR
text.replace(/ /g, "-");   // "a-b-c"
```

### 2. Mutating Strings? (Impossible!)
Strings in JavaScript are **immutable**. Methods like `toUpperCase()` return a *new* string; they don't change the original.

```javascript
let name = "alice";
name.toUpperCase(); // Returns "ALICE", but 'name' is still "alice"

// Correct
name = name.toUpperCase();
```

---

## 🎓 Real React Examples

### URL Slug Generator
```javascript
function SlugGenerator() {
    const [title, setTitle] = useState('');
    
    // Generate slug in real-time
    const slug = title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9 ]/g, '') // Remove special chars
        .replaceAll(' ', '-');

    return (
        <div>
            <input 
                value={title} 
                onChange={e => setTitle(e.target.value)}
                placeholder="Post Title" 
            />
            <p>Slug: {slug}</p>
        </div>
    );
}
```

### Highlight Search Terms
```javascript
function HighlightText({ text, highlight }) {
    if (!highlight.trim()) return <span>{text}</span>;

    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    
    return (
        <span>
            {parts.map((part, i) => 
                part.toLowerCase() === highlight.toLowerCase() ? (
                    <mark key={i}>{part}</mark>
                ) : (
                    <span key={i}>{part}</span>
                )
            )}
        </span>
    );
}
```

---

## ✅ Summary

| Method | Purpose | Example |
|--------|---------|---------|
| `includes` | Check existence | `"Hi".includes("i")` -> `true` |
| `split` | String to Array | `"a,b".split(",")` -> `["a", "b"]` |
| `slice` | Extract part | `"React".slice(0, 2)` -> `"Re"` |
| `replace` | Swap text | `"Hi".replace("i", "ey")` -> `"Hey"` |
| `trim` | Remove whitespace | `" a ".trim()` -> `"a"` |
| `toLowerCase` | Normalize | `"A".toLowerCase()` -> `"a"` |

**Strings are everywhere in UI. Master these methods to handle text like a pro!** ✍️
