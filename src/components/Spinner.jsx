/** Spinner — standalone loading indicator. Inherits `currentColor`. */
export function Spinner({ size = 20, label = "Loading", className = "", ...rest }) {
  return (
    <span
      className={["aw-spinner", className].filter(Boolean).join(" ")}
      role="status"
      aria-label={label}
      style={{ width: size, height: size, borderWidth: Math.max(2, Math.round(size / 9)) }}
      {...rest}
    />
  );
}
