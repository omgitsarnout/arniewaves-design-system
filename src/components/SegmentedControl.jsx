import { useLayoutEffect, useRef, useState } from "react";

/**
 * SegmentedControl — pill-style multi-option toggle with a sliding thumb.
 * General-purpose (view switchers, filters); used here for monthly/annual billing.
 *
 * The thumb is measured from the active segment, so options can be any width
 * (e.g. one carrying a "Save 20%" badge) and the pill still fits exactly.
 *
 * Props:
 *   options: Array<string | { value, label, badge? }>
 *   value, onChange(value)
 *   size: "sm" | "md"
 * @category Forms
 */
export function SegmentedControl({
  options = [],
  value,
  onChange,
  size = "md",
  className = "",
  ...rest
}) {
  const opts = options.map((o) => (typeof o === "string" ? { value: o, label: o } : o));
  const rootRef = useRef(null);
  const [thumb, setThumb] = useState({ left: 0, width: 0, ready: false });

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const measure = () => {
      const active = root.querySelector('[data-active="true"]');
      if (!active) return;
      setThumb({ left: active.offsetLeft, width: active.offsetWidth, ready: true });
    };

    measure();
    // Re-measure when the control resizes (layout, container width changes).
    const ro = new ResizeObserver(measure);
    ro.observe(root);
    // …and once the marker/mono fonts finish loading, since that reflows widths.
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(measure);
    }
    return () => ro.disconnect();
  }, [value, opts.length]);

  return (
    <div
      ref={rootRef}
      role="tablist"
      className={["aw-seg", `aw-seg--${size}`, className].filter(Boolean).join(" ")}
      {...rest}
    >
      <span
        className="aw-seg__thumb"
        aria-hidden="true"
        style={{
          left: `${thumb.left}px`,
          width: `${thumb.width}px`,
          opacity: thumb.ready ? 1 : 0,
        }}
      />
      {opts.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            role="tab"
            aria-selected={active}
            data-active={active || undefined}
            className={["aw-seg__opt", active && "is-active"].filter(Boolean).join(" ")}
            onClick={() => onChange?.(o.value)}
          >
            {o.label}
            {o.badge && <span className="aw-seg__badge">{o.badge}</span>}
          </button>
        );
      })}
    </div>
  );
}
