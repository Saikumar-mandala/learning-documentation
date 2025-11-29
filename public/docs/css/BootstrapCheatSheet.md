# 🅱️ The Ultimate Bootstrap 5 Cheat Sheet

A complete reference guide to Bootstrap 5 classes, components, and utilities.

---

## 📐 Layout

### Breakpoints
| Class Infix | Dimensions |
|-------------|------------|
| `xs` | <576px |
| `sm` | ≥576px |
| `md` | ≥768px |
| `lg` | ≥992px |
| `xl` | ≥1200px |
| `xxl` | ≥1400px |

### Containers
| Class | Description |
|-------|-------------|
| `.container` | Fixed width container |
| `.container-fluid` | Full width container |
| `.container-{breakpoint}` | Width 100% until breakpoint |

### Grid System
```html
<div class="row">
  <div class="col">Auto width</div>
  <div class="col-6">Width 50%</div>
  <div class="col-md-4">Width 33.3% on md+</div>
</div>
```
- `.row`: Wrapper for columns
- `.col`: Auto-layout column
- `.col-{1-12}`: Specific column size
- `.col-{breakpoint}-{1-12}`: Responsive column size
- `.offset-{1-11}`: Add spacing before column
- `.g-{0-5}`: Gutter size (gap)

---

## 🎨 Content & Typography

### Headings & Text
- `.h1` through `.h6`: Heading styles
- `.display-{1-6}`: Large, standout headings
- `.lead`: Emphasized paragraph
- `.small`: Smaller text
- `.mark`: Highlighted text
- `.blockquote`: Blockquote style
- `.text-muted`: Muted text color

### Text Alignment & Transformation
- `.text-start`, `.text-center`, `.text-end`: Alignment
- `.text-{breakpoint}-{align}`: Responsive alignment
- `.text-lowercase`, `.text-uppercase`, `.text-capitalize`: Casing
- `.text-wrap`, `.text-nowrap`: Wrapping
- `.text-break`: Word break
- `.text-truncate`: Truncate with ellipsis

### Lists
- `.list-unstyled`: Remove bullets
- `.list-inline`: Horizontal list
- `.list-inline-item`: List item

### Images
- `.img-fluid`: Responsive image (max-width: 100%)
- `.img-thumbnail`: Bordered image
- `.rounded`: Rounded corners
- `.float-start`, `.float-end`: Floating

### Tables
```html
<table class="table table-striped table-hover">
  ...
</table>
```
- `.table`: Basic table
- `.table-striped`: Zebra striping
- `.table-bordered`: Borders on all sides
- `.table-hover`: Hover state
- `.table-sm`: Compact table
- `.table-{color}`: Contextual colors (primary, success, etc.)

---

## 📝 Forms

### Form Controls
```html
<div class="mb-3">
  <label class="form-label">Email</label>
  <input type="email" class="form-control" placeholder="name@example.com">
</div>
```
- `.form-control`: Standard input styling
- `.form-control-lg`, `.form-control-sm`: Sizing
- `.form-control-plaintext`: Read-only plain text
- `.form-select`: Select dropdown
- `.form-check`: Checkbox/Radio wrapper
- `.form-check-input`: Checkbox/Radio input
- `.form-check-label`: Label for check
- `.form-switch`: Toggle switch style

### Input Groups
```html
<div class="input-group">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control">
</div>
```

### Floating Labels
```html
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Email address</label>
</div>
```

### Validation
- `.is-valid`, `.is-invalid`: Validation states
- `.valid-feedback`, `.invalid-feedback`: Validation messages

---

## 🧩 Components

### Accordion
- `.accordion`
- `.accordion-item`
- `.accordion-header`
- `.accordion-button`
- `.accordion-collapse`
- `.accordion-body`

### Alerts
```html
<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
```
- `.alert-{color}`: Contextual colors
- `.alert-link`: Matching link color
- `.alert-dismissible`: Dismissible alert

### Badge
- `.badge`: Base class
- `.bg-{color}`: Background color
- `.rounded-pill`: Pill shape

### Buttons
```html
<button type="button" class="btn btn-primary">Primary</button>
```
- `.btn`: Base class
- `.btn-{color}`: Solid buttons (primary, secondary, success, danger, warning, info, light, dark, link)
- `.btn-outline-{color}`: Outline buttons
- `.btn-lg`, `.btn-sm`: Sizing
- `.d-grid`: Block buttons (full width)

### Card
```html
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```
- `.card`: Container
- `.card-body`: Content wrapper
- `.card-title`, `.card-subtitle`, `.card-text`: Typography
- `.card-img-top`, `.card-img-bottom`: Images
- `.card-header`, `.card-footer`: Header/Footer

### Dropdowns
- `.dropdown`: Container
- `.dropdown-toggle`: Button toggle
- `.dropdown-menu`: Menu container
- `.dropdown-item`: Menu item
- `.dropdown-divider`: Divider

### Modal
- `.modal`: Container
- `.modal-dialog`: Dialog wrapper
- `.modal-content`: Content wrapper
- `.modal-header`, `.modal-body`, `.modal-footer`: Sections
- `.modal-title`: Title

### Navbar
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    ...
  </div>
</nav>
```
- `.navbar`: Base class
- `.navbar-expand-{breakpoint}`: Responsive collapsing
- `.navbar-light`, `.navbar-dark`: Color schemes
- `.navbar-brand`: Logo/Brand
- `.navbar-nav`: Nav links container
- `.nav-link`: Individual link

### Navs & Tabs
- `.nav`: Base class
- `.nav-tabs`: Tab style
- `.nav-pills`: Pill style
- `.nav-link`: Link style
- `.active`: Active state

### Pagination
- `.pagination`: Container
- `.page-item`: Item wrapper
- `.page-link`: Link style

### Progress
```html
<div class="progress">
  <div class="progress-bar w-75" role="progressbar"></div>
</div>
```
- `.progress`: Container
- `.progress-bar`: Bar styling
- `.progress-bar-striped`: Striped
- `.progress-bar-animated`: Animated stripes

### Spinners
- `.spinner-border`: Border spinner
- `.spinner-grow`: Growing spinner
- `.text-{color}`: Color utility

---

## 🛠️ Utilities

### Backgrounds
- `.bg-{color}`: primary, secondary, success, danger, warning, info, light, dark, body, white, transparent
- `.bg-gradient`: Add gradient

### Borders
- `.border`: Add border
- `.border-top`, `.border-end`, `.border-bottom`, `.border-start`: Specific sides
- `.border-0`: Remove border
- `.border-{color}`: Border color
- `.border-{1-5}`: Border width
- `.rounded`: Rounded corners
- `.rounded-circle`: Circle
- `.rounded-pill`: Pill shape

### Colors
- `.text-{color}`: Text color
- `.text-white-50`: 50% opacity white
- `.text-black-50`: 50% opacity black

### Display
- `.d-{value}`: none, inline, inline-block, block, grid, table, table-cell, table-row, flex, inline-flex
- `.d-{breakpoint}-{value}`: Responsive display

### Flexbox
- `.flex-row`, `.flex-column`: Direction
- `.flex-row-reverse`, `.flex-column-reverse`: Reverse direction
- `.flex-wrap`, `.flex-nowrap`, `.flex-wrap-reverse`: Wrapping
- `.justify-content-{start|end|center|between|around|even}`: Main axis alignment
- `.align-items-{start|end|center|baseline|stretch}`: Cross axis alignment
- `.align-content-{start|end|center|between|around|stretch}`: Content alignment
- `.align-self-{start|end|center|baseline|stretch}`: Self alignment
- `.flex-fill`: Fill available space
- `.flex-grow-{0|1}`: Grow
- `.flex-shrink-{0|1}`: Shrink

### Spacing (Margin & Padding)
Format: `{property}{sides}-{size}`
- **Property**: `m` (margin), `p` (padding)
- **Sides**: `t` (top), `b` (bottom), `s` (start/left), `e` (end/right), `x` (left & right), `y` (top & bottom), blank (all sides)
- **Size**: `0` (0), `1` (0.25rem), `2` (0.5rem), `3` (1rem), `4` (1.5rem), `5` (3rem), `auto` (margin only)

Examples:
- `.mt-3`: Margin top 1rem
- `.px-4`: Padding left & right 1.5rem
- `.m-auto`: Margin auto
- `.gap-{0-5}`: Flex/Grid gap

### Sizing
- `.w-{25|50|75|100|auto}`: Width %
- `.h-{25|50|75|100|auto}`: Height %
- `.mw-100`: Max-width 100%
- `.mh-100`: Max-height 100%
- `.vw-100`: Viewport width 100%
- `.vh-100`: Viewport height 100%

### Position
- `.position-static`
- `.position-relative`
- `.position-absolute`
- `.position-fixed`
- `.position-sticky`
- `.top-0`, `.start-0`, `.bottom-0`, `.end-0`: Placement
- `.translate-middle`: Center element

### Shadows
- `.shadow-none`: No shadow
- `.shadow-sm`: Small shadow
- `.shadow`: Regular shadow
- `.shadow-lg`: Large shadow

### Visibility
- `.visible`: Visible
- `.invisible`: Invisible (takes space)
- `.d-none`: Hidden (no space)

### Z-Index
- `.z-0` to `.z-3`: Z-index levels
- `.z-n1`: Negative z-index

---

## 🔗 Useful Links
- [Official Bootstrap 5 Docs](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
