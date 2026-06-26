import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon.jsx";

/**
 * Menu — dropdown action menu (distinct from Select). Pass a `trigger` node and
 * `items`. Each item: { label, icon?, shortcut?, onClick?, danger?, disabled? }
 * or { separator: true }. Closes on outside-click / Esc; ↑/↓ move focus.
 *
 * Props: trigger, items, align "start" | "end"
 */
export function Menu({ trigger, items = [], align = "start", className = "" }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    // focus first item
    const t = setTimeout(() => panelRef.current?.querySelector('[role="menuitem"]')?.focus(), 0);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      clearTimeout(t);
    };
  }, [open]);

  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
      return;
    }
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    const nodes = [...panelRef.current.querySelectorAll('[role="menuitem"]:not([disabled])')];
    if (!nodes.length) return;
    const i = nodes.indexOf(document.activeElement);
    let next = 0;
    if (e.key === "ArrowDown") next = i < 0 ? 0 : (i + 1) % nodes.length;
    else if (e.key === "ArrowUp") next = i <= 0 ? nodes.length - 1 : i - 1;
    else if (e.key === "End") next = nodes.length - 1;
    nodes[next].focus();
  };

  return (
    <div className={["aw-menu", className].filter(Boolean).join(" ")} ref={rootRef}>
      <span
        className="aw-menu__trigger"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {trigger}
      </span>
      {open && (
        <div
          ref={panelRef}
          className={`aw-menu__panel aw-menu__panel--${align}`}
          role="menu"
          onKeyDown={onKeyDown}
        >
          {items.map((it, i) =>
            it.separator ? (
              <div key={`s${i}`} className="aw-menu__sep" role="separator" />
            ) : (
              <button
                key={i}
                type="button"
                role="menuitem"
                disabled={it.disabled}
                className={["aw-menu__item", it.danger && "is-danger"].filter(Boolean).join(" ")}
                onClick={() => {
                  it.onClick?.();
                  setOpen(false);
                }}
              >
                {it.icon && <Icon name={it.icon} size={16} className="aw-menu__item-icon" />}
                <span className="aw-menu__item-label">{it.label}</span>
                {it.shortcut && <span className="aw-menu__shortcut">{it.shortcut}</span>}
              </button>
            ),
          )}
        </div>
      )}
    </div>
  );
}
