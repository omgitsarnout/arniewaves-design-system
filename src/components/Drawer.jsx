import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Icon } from "./Icon.jsx";

/**
 * Drawer / Sheet — slide-in panel. side: "right" | "left" | "bottom".
 * Focus trap, Esc-to-close, scroll lock, overlay-click dismiss (like Modal).
 * On mobile a side drawer goes near-full-width; "bottom" is a bottom sheet.
 *
 * Props: open, onClose, side, title, children, footer, size (px | css length)
 * @category Feedback
 */
export function Drawer({
  open,
  onClose,
  side = "right",
  title,
  children,
  footer,
  size,
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
    const t = setTimeout(() => (focusables()[0] || panelRef.current)?.focus(), 0);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      clearTimeout(t);
      document.body.style.overflow = prev;
      lastFocused.current?.focus?.();
    };
  }, [open, onClose, focusables]);

  if (!open) return null;

  const sizeVar =
    size != null ? { "--drawer-size": typeof size === "number" ? `${size}px` : size } : undefined;

  return createPortal(
    <div
      className="aw-drawer__overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === "string" ? title : undefined}
        tabIndex={-1}
        style={sizeVar}
        className={["aw-drawer", `aw-drawer--${side}`, className].filter(Boolean).join(" ")}
      >
        {(title || showClose) && (
          <header className="aw-drawer__head">
            {title && <h2 className="aw-drawer__title">{title}</h2>}
            {showClose && (
              <button type="button" className="aw-drawer__close" aria-label="Close" onClick={onClose}>
                <Icon name="close" size={18} />
              </button>
            )}
          </header>
        )}
        <div className="aw-drawer__body">{children}</div>
        {footer && <footer className="aw-drawer__foot">{footer}</footer>}
      </div>
    </div>,
    document.body,
  );
}
