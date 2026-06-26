/**
 * Progress — linear progress bar. Pass `indeterminate` for an unknown-length
 * loading state. size: "sm" | "md".
 */
export function Progress({
  value = 0,
  max = 100,
  indeterminate = false,
  label,
  showValue = false,
  size = "md",
  className = "",
}) {
  const pct = indeterminate ? 0 : Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className={["aw-progress-wrap", className].filter(Boolean).join(" ")}>
      {(label || showValue) && (
        <div className="aw-progress__top">
          {label && <span className="aw-progress__label">{label}</span>}
          {showValue && !indeterminate && (
            <span className="aw-progress__value">{Math.round(pct)}%</span>
          )}
        </div>
      )}
      <div
        className={["aw-progress", `aw-progress--${size}`, indeterminate && "is-indeterminate"]
          .filter(Boolean)
          .join(" ")}
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : Math.round(pct)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div className="aw-progress__bar" style={indeterminate ? undefined : { width: `${pct}%` }} />
      </div>
    </div>
  );
}
