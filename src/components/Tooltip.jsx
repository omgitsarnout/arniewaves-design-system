import { useId, useState } from "react";

/**
 * Tooltip — wraps a single interactive child, shows on hover + focus.
 * CSS-positioned via `placement`: "top" | "bottom" | "left" | "right".
 * Purely a supplementary label — not for essential-only content.
 * @category Feedback
 */
export function Tooltip({
  label,
  placement = "top",
  children,
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const id = useId();

  const show = () => setOpen(true);
  const hide = () => setOpen(false);

  return (
    <span
      className={["aw-tooltip", className].filter(Boolean).join(" ")}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      <span aria-describedby={open ? id : undefined} className="aw-tooltip__trigger">
        {children}
      </span>
      <span
        role="tooltip"
        id={id}
        className={[
          "aw-tooltip__bubble",
          `aw-tooltip__bubble--${placement}`,
          open && "is-open",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {label}
        <span className="aw-tooltip__arrow" aria-hidden="true" />
      </span>
    </span>
  );
}
