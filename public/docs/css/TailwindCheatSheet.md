# 🌊 The Ultimate Tailwind CSS Cheat Sheet

A complete reference guide to Tailwind CSS utility classes.

---

## 📐 Layout

### Container
| Class | Breakpoint | Max-Width |
|-------|------------|-----------|
| `container` | None | 100% |
| `sm` | 640px | 640px |
| `md` | 768px | 768px |
| `lg` | 1024px | 1024px |
| `xl` | 1280px | 1280px |
| `2xl` | 1536px | 1536px |

### Display
- `block`, `inline-block`, `inline`
- `flex`, `inline-flex`
- `grid`, `inline-grid`
- `hidden` (display: none)
- `contents`, `table`, `table-row`, `table-cell`

### Position
- `static`, `fixed`, `absolute`, `relative`, `sticky`
- `inset-0` (top: 0, right: 0, bottom: 0, left: 0)
- `inset-x-0`, `inset-y-0`
- `top-0`, `right-0`, `bottom-0`, `left-0`
- `z-0`, `z-10`, `z-20`, `z-30`, `z-40`, `z-50`, `z-auto`

### Overflow
- `overflow-auto`, `overflow-hidden`, `overflow-visible`, `overflow-scroll`
- `overflow-x-auto`, `overflow-y-auto`

---

## 🎨 Flexbox & Grid

### Flexbox
- **Direction**: `flex-row`, `flex-row-reverse`, `flex-col`, `flex-col-reverse`
- **Wrap**: `flex-wrap`, `flex-wrap-reverse`, `flex-nowrap`
- **Grow/Shrink**: `flex-1`, `flex-auto`, `flex-initial`, `flex-none`, `grow`, `grow-0`, `shrink`, `shrink-0`
- **Justify**: `justify-start`, `justify-end`, `justify-center`, `justify-between`, `justify-around`, `justify-evenly`
- **Align Items**: `items-start`, `items-end`, `items-center`, `items-baseline`, `items-stretch`
- **Align Self**: `self-auto`, `self-start`, `self-end`, `self-center`, `self-stretch`

### Grid
- **Cols**: `grid-cols-1` to `grid-cols-12`, `grid-cols-none`
- **Rows**: `grid-rows-1` to `grid-rows-6`, `grid-rows-none`
- **Gap**: `gap-0`, `gap-1`, `gap-2` ... `gap-96`, `gap-px`
- **Col Span**: `col-span-1` to `col-span-12`, `col-span-full`
- **Row Span**: `row-span-1` to `row-span-6`, `row-span-full`
- **Start/End**: `col-start-1`, `col-end-1`, `row-start-1`, `row-end-1`

---

## 📏 Spacing & Sizing

### Padding & Margin
Format: `{property}{side}-{size}`
- **Property**: `p` (padding), `m` (margin)
- **Side**: `t` (top), `b` (bottom), `l` (left), `r` (right), `x` (horizontal), `y` (vertical), `` (all)
- **Size**: `0`, `px`, `0.5`, `1`, `1.5`, `2`, `2.5`, `3`, `4` ... `96`
- **Negative Margin**: `-m-1`, `-mx-4`

### Width & Height
- **Width**: `w-0`, `w-px`, `w-1` ... `w-96`, `w-auto`, `w-full` (100%), `w-screen` (100vw), `w-min`, `w-max`, `w-fit`
- **Percentages**: `w-1/2`, `w-1/3`, `w-2/3`, `w-1/4`, `w-3/4`, `w-1/5` ... `w-11/12`
- **Height**: `h-0`, `h-px`, `h-1` ... `h-96`, `h-auto`, `h-full`, `h-screen`
- **Min/Max**: `min-w-0`, `min-w-full`, `max-w-xs` ... `max-w-7xl`, `max-w-full`, `min-h-0`, `min-h-full`, `min-h-screen`, `max-h-full`, `max-h-screen`

---

## 🅰️ Typography

### Font Family
- `font-sans`, `font-serif`, `font-mono`

### Font Size
- `text-xs` (0.75rem)
- `text-sm` (0.875rem)
- `text-base` (1rem)
- `text-lg` (1.125rem)
- `text-xl` (1.25rem)
- `text-2xl` ... `text-9xl`

### Font Weight
- `font-thin` (100)
- `font-extralight` (200)
- `font-light` (300)
- `font-normal` (400)
- `font-medium` (500)
- `font-semibold` (600)
- `font-bold` (700)
- `font-extrabold` (800)
- `font-black` (900)

### Text Alignment & Color
- `text-left`, `text-center`, `text-right`, `text-justify`
- `text-transparent`, `text-current`, `text-black`, `text-white`
- `text-{color}-{50-950}` (e.g., `text-blue-500`)

### Decoration & Transform
- `underline`, `overline`, `line-through`, `no-underline`
- `uppercase`, `lowercase`, `capitalize`, `normal-case`
- `truncate`, `text-ellipsis`, `text-clip`

---

## 🎨 Backgrounds & Borders

### Background
- `bg-fixed`, `bg-local`, `bg-scroll`
- `bg-clip-border`, `bg-clip-padding`, `bg-clip-content`, `bg-clip-text`
- `bg-{color}-{50-950}`
- `bg-opacity-{0-100}`
- `bg-bottom`, `bg-center`, `bg-left`, `bg-left-bottom` ...
- `bg-repeat`, `bg-no-repeat`, `bg-repeat-x`, `bg-repeat-y`
- `bg-auto`, `bg-cover`, `bg-contain`

### Borders
- `border`, `border-0`, `border-2`, `border-4`, `border-8`
- `border-x`, `border-y`, `border-t` ...
- `border-solid`, `border-dashed`, `border-dotted`, `border-double`, `border-none`
- `border-{color}-{50-950}`
- `divide-x`, `divide-y`, `divide-{color}`

### Rounded Corners
- `rounded-none`, `rounded-sm`, `rounded`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-full`
- `rounded-t-lg`, `rounded-r-lg`, `rounded-b-lg`, `rounded-l-lg`

---

## ✨ Effects & Filters

### Shadows
- `shadow-sm`, `shadow`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`, `shadow-inner`, `shadow-none`

### Opacity
- `opacity-0`, `opacity-5`, `opacity-10` ... `opacity-100`

### Blurs
- `blur-none`, `blur-sm`, `blur`, `blur-md`, `blur-lg`, `blur-xl`, `blur-2xl`, `blur-3xl`

### Transitions
- `transition-none`, `transition-all`, `transition`, `transition-colors`, `transition-opacity`, `transition-shadow`, `transition-transform`
- `duration-75`, `duration-100` ... `duration-1000`
- `ease-linear`, `ease-in`, `ease-out`, `ease-in-out`
- `delay-75`, `delay-100` ... `delay-1000`

### Animation
- `animate-none`, `animate-spin`, `animate-ping`, `animate-pulse`, `animate-bounce`

---

## 🖱️ Interactivity

- `cursor-auto`, `cursor-default`, `cursor-pointer`, `cursor-wait`, `cursor-text`, `cursor-move`, `cursor-help`, `cursor-not-allowed`
- `select-none`, `select-text`, `select-all`, `select-auto`
- `resize-none`, `resize`, `resize-y`, `resize-x`
- `pointer-events-none`, `pointer-events-auto`

---

## 📱 Responsive Design

| Prefix | Minimum Width | CSS |
|--------|---------------|-----|
| `sm:` | 640px | `@media (min-width: 640px)` |
| `md:` | 768px | `@media (min-width: 768px)` |
| `lg:` | 1024px | `@media (min-width: 1024px)` |
| `xl:` | 1280px | `@media (min-width: 1280px)` |
| `2xl:` | 1536px | `@media (min-width: 1536px)` |

**Usage:** `md:text-center`, `lg:flex`, `xl:w-1/2`

---

## 🌙 Dark Mode

Enable dark mode in config, then use `dark:` prefix.
`dark:bg-black`, `dark:text-white`

---

## 🔗 Useful Links
- [Official Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tailwind Play](https://play.tailwindcss.com/)
