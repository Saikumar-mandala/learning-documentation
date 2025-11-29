# Portals

## 🚪 What are they?

Portals provide a way to render children into a DOM node outside the parent component's DOM hierarchy.

## ✅ Use Cases

- **Modals**: Render over everything
- **Tooltips**: Position relative to viewport
- **Notifications**: Global toast messages

## 💡 Pattern

\`\`\`tsx
import { createPortal } from 'react-dom';

function Modal({ children }) {
  return createPortal(
    <div className="modal">{children}</div>,
    document.body
  );
}
\`\`\`
