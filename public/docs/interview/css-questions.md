# CSS Interview Questions (A to Z)

## B - Box Model
**Q: What is the Box Model?**
A: In CSS, every element is a rectangular box. The Box Model consists of 4 parts (from inside out):
1. **Content:** The actual text or image.
2. **Padding:** Space between the content and the border.
3. **Border:** A line around the padding.
4. **Margin:** Space outside the border (between this element and others).

## C - Centering
**Q: How do you center a div horizontally and vertically?**
A: The easiest way is using Flexbox:
```css
.parent {
  display: flex;
  justify-content: center; /* Horizontal */
  align-items: center;     /* Vertical */
}
```

## D - Display
**Q: What is the difference between `display: block`, `inline`, and `inline-block`?**
A:
- **block:** Takes up the full width (starts on a new line). Example: `<div>`, `<p>`.
- **inline:** Takes only as much width as necessary. Cannot set width/height. Example: `<span>`, `<a>`.
- **inline-block:** Like inline, but you CAN set width and height.

## F - Flexbox
**Q: What is Flexbox?**
A: Flexbox is a layout model designed for one-dimensional layouts (either a row or a column). It makes it easy to align items and distribute space.
Key properties: `justify-content`, `align-items`, `flex-direction`.

## G - Grid
**Q: What is CSS Grid?**
A: CSS Grid is a layout model for two-dimensional layouts (rows AND columns). It is more powerful than Flexbox for complex page layouts.

## P - Position
**Q: What are the different values for `position`?**
A:
- **static:** Default. Normal flow.
- **relative:** Normal flow, but can be moved slightly using top/left/right/bottom.
- **absolute:** Removed from normal flow. Positioned relative to the nearest "positioned" ancestor.
- **fixed:** Removed from normal flow. Positioned relative to the browser window (stays when scrolling).
- **sticky:** Toggles between relative and fixed depending on scroll position.

## P - Pseudo-classes
**Q: What are Pseudo-classes?**
A: They define a special state of an element.
Example: `:hover` (when mouse is over), `:focus` (when clicked/selected), `:first-child`.

## R - Responsive Design
**Q: What is Responsive Design?**
A: It means making your website look good on all devices (desktops, tablets, phones). We use **Media Queries** (`@media`) to change styles based on screen size.

## S - Specificity
**Q: What is Specificity?**
A: Specificity determines which CSS rule is applied if there are conflicts.
Hierarchy (from lowest to highest):
1. Element selector (`p`)
2. Class selector (`.my-class`)
3. ID selector (`#my-id`)
4. Inline styles (`style="..."`)
5. `!important` (Overrides everything)

## Z - Z-Index
**Q: What is z-index?**
A: It controls the vertical stacking order of elements (which one is on top). Higher numbers are closer to the viewer. It only works on positioned elements (relative, absolute, fixed, sticky).
