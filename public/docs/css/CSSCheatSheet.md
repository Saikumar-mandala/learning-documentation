# 🎨 The Ultimate CSS Cheat Sheet

A comprehensive guide to mastering CSS, from selectors to modern layout systems.

---

## 🎯 Selectors

### Basic Selectors
| Selector | Example | Description |
|----------|---------|-------------|
| Universal | `*` | Selects all elements |
| Type | `div` | Selects all `<div>` elements |
| Class | `.classname` | Selects elements with class="classname" |
| ID | `#idname` | Selects element with id="idname" |
| Grouping | `div, p` | Selects both `<div>` and `<p>` |

### Combinators
| Combinator | Example | Description |
|------------|---------|-------------|
| Descendant | `div p` | Selects `<p>` inside `<div>` (any depth) |
| Child | `div > p` | Selects `<p>` that is a direct child of `<div>` |
| Adjacent Sibling | `div + p` | Selects `<p>` immediately following `<div>` |
| General Sibling | `div ~ p` | Selects all `<p>` following `<div>` |

### Pseudo-classes
| Selector | Description |
|----------|-------------|
| `:hover` | Mouse over element |
| `:focus` | Element has focus |
| `:first-child` | First child of parent |
| `:last-child` | Last child of parent |
| `:nth-child(n)` | Selects nth child (e.g., `2n` for even) |
| `:not(selector)` | Selects elements NOT matching selector |

### Pseudo-elements
| Selector | Description |
|----------|-------------|
| `::before` | Insert content before element |
| `::after` | Insert content after element |
| `::placeholder` | Style input placeholder |

---

## 📦 The Box Model

Every element is a box. Understanding this is crucial.

```css
.box {
  width: 300px;       /* Content width */
  padding: 20px;      /* Space inside border */
  border: 5px solid;  /* Border around padding */
  margin: 30px;       /* Space outside border */
  
  /* CRITICAL: Makes width include padding & border */
  box-sizing: border-box; 
}
```

> **Tip:** Always use `* { box-sizing: border-box; }` in your global styles to make sizing intuitive.

---

## 📐 Flexbox (Flexible Box)

One-dimensional layout method (rows OR columns).

### Container Properties
```css
.container {
  display: flex;
  
  /* Direction */
  flex-direction: row;          /* default: left to right */
  flex-direction: column;       /* top to bottom */
  
  /* Wrapping */
  flex-wrap: nowrap;            /* default: squeeze items */
  flex-wrap: wrap;              /* wrap to next line */
  
  /* Alignment along Main Axis (Horizontal if row) */
  justify-content: flex-start;  /* default */
  justify-content: center;      /* center items */
  justify-content: space-between; /* equal space between */
  justify-content: space-around;  /* equal space around */
  
  /* Alignment along Cross Axis (Vertical if row) */
  align-items: stretch;         /* default: stretch to fill */
  align-items: center;          /* center vertically */
  align-items: flex-start;      /* top */
  align-items: flex-end;        /* bottom */
}
```

### Item Properties
```css
.item {
  flex-grow: 1;     /* Grow to fill space (0 = don't grow) */
  flex-shrink: 1;   /* Shrink if needed (0 = don't shrink) */
  flex-basis: auto; /* Initial size */
  
  /* Shorthand: grow shrink basis */
  flex: 1;          /* flex: 1 1 0% */
  
  align-self: center; /* Override container's align-items */
}
```

---

## ▦ CSS Grid

Two-dimensional layout method (rows AND columns).

### Container Properties
```css
.container {
  display: grid;
  
  /* Define Columns & Rows */
  grid-template-columns: 100px 200px auto; /* Fixed sizes */
  grid-template-columns: 1fr 2fr 1fr;      /* Fractional units (responsive!) */
  grid-template-columns: repeat(3, 1fr);   /* Repeat 3 times */
  
  /* Gaps */
  gap: 20px;        /* Row and Column gap */
  
  /* Alignment */
  justify-items: center; /* Horizontal align items */
  align-items: center;   /* Vertical align items */
}
```

### Item Properties
```css
.item {
  /* Spanning */
  grid-column: 1 / 3;    /* Start at line 1, end at line 3 */
  grid-row: span 2;      /* Span 2 rows */
  
  /* Placement */
  grid-area: header;     /* Assign to named area */
}
```

---

## 🅰️ Typography

```css
.text {
  /* Font Family */
  font-family: 'Inter', sans-serif;
  
  /* Size & Weight */
  font-size: 16px;       /* px, rem, em */
  font-weight: 700;      /* 400=normal, 700=bold */
  
  /* Spacing */
  line-height: 1.5;      /* Space between lines */
  letter-spacing: 0.5px; /* Space between letters */
  
  /* Decoration */
  text-decoration: none; /* remove underline */
  text-transform: uppercase; /* UPPERCASE */
  
  /* Alignment */
  text-align: center;    /* left, right, center, justify */
}
```

---

## 📍 Positioning

| Value | Description |
|-------|-------------|
| `static` | Default. Normal flow. |
| `relative` | Normal flow, but can be offset with top/left/etc. Acts as parent for absolute children. |
| `absolute` | Removed from flow. Positioned relative to nearest positioned ancestor. |
| `fixed` | Removed from flow. Positioned relative to viewport (stays on scroll). |
| `sticky` | Toggles between relative and fixed based on scroll position. |

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Perfect centering */
}
```

---

## 🎨 Colors & Backgrounds

```css
.element {
  /* Colors */
  color: #ff0000;              /* Hex */
  color: rgb(255, 0, 0);       /* RGB */
  color: rgba(255, 0, 0, 0.5); /* RGB with Transparency */
  color: hsl(0, 100%, 50%);    /* HSL (Hue, Saturation, Lightness) */
  
  /* Backgrounds */
  background-color: #333;
  background-image: url('image.jpg');
  background-size: cover;      /* Scale to fill */
  background-position: center; /* Center image */
  background-repeat: no-repeat;
  
  /* Gradient */
  background: linear-gradient(45deg, blue, red);
}
```

---

## 📱 Media Queries (Responsive Design)

```css
/* Mobile First Approach (Default styles are for mobile) */

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    max-width: 1000px;
  }
}
```

---

## 🎬 Transitions & Animations

### Transitions (Smooth changes)
```css
.button {
  background: blue;
  transition: background 0.3s ease-in-out;
}

.button:hover {
  background: darkblue;
}
```

### Keyframe Animations
```css
@keyframes slideIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

.element {
  animation: slideIn 1s ease-out forwards;
}
```

---

## 💡 Modern CSS Tricks

### Centering a Div (The easiest way)
```css
.parent {
  display: grid;
  place-items: center;
}
```

### Aspect Ratio
```css
.video {
  aspect-ratio: 16 / 9;
}
```

### Clamp (Responsive Typography)
```css
h1 {
  /* min, preferred, max */
  font-size: clamp(2rem, 5vw, 4rem);
}
```

### Custom Properties (Variables)
```css
:root {
  --primary-color: #007bff;
}

.button {
  color: var(--primary-color);
}
```
