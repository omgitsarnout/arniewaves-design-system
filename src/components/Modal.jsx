import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

/**
 * Modal / Dialog — overlay with focus trap, Esc-to-close, scroll lock.
 *
 * Props:
 *   open, onClose()
 *   title, children, footer
 *   size: "sm" | "md" | "lg"
 *   closeOnOverlay (default true), showClose (default true)
 */
export function Modal({
  open,
  onClose,
  title,
  children,
  footer,
  size = "md",
  closeOnOverlay = true,
  showClose = true,
  className = "",
}) {
  const panelRef = useRef(null);
  const lastFocused = useRef(null);

  const focusables = useCallback(
    () =>
      panelRef.current
        ? [
            ...panelRef.current.querySelectorAll(
              'a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])',
            ),
          ]
        : [],
    [],
  );

  // Esc + focus trap
  useEffect(() => {
    if (!open) return;
    lastFocused.current = document.activeElement;
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose?.();
      } else if (e.key === "Tab") {
        const items = focusables();
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    // initial focus
    const t = setTimeout(() => {
      const items = focusables();
      (items[0] || panelRef.current)?.focus();
    }, 0);
    // scroll lock
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      clearTimeout(t);
      document.body.style.overflow = prevOverflow;
      lastFocused.current?.focus?.();
    };
  }, [open, onClose, focusables]);

  if (!open) return null;

  return createPortal(
    <div
      className="aw-modal__overlay"
      onMouseDown={(e) => {
        if (closeOnOverlay && e.target === e.currentTarget) onClose?.();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === "string" ? title : undefined}
        tabIndex={-1}
        className={["aw-modal", `aw-modal--${size}`, className]
          .filter(Boolean)
          .join(" ")}
      >
        {(title || showClose) && (
          <header className="aw-modal__head">
            {title && <h2 className="aw-modal__title">{title}</h2>}
            {showClose && (
              <button
                type="button"
                className="aw-modal__close"
                aria-label="Close"
                onClick={onClose}
              >
                ×
              </button>
            )}
          </header>
        )}
        <div className="aw-modal__body">{children}</div>
        {footer && <footer className="aw-modal__foot">{footer}</footer>}
      </div>
    </div>,
    document.body,
  );
}
