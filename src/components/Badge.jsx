/**
 * Badge / Pill — zine-label feel. Space Mono 700, 10px, 2px radius.
 * variant: "orange" | "sand" | "outline"
 * Optional `onRemove` renders a dismiss affordance (pill/tag use).
 * @category Foundations
 */
export function Badge({
  variant = "orange",
  children,
  dot = false,
  onRemove,
  className = "",
  ...rest
}) {
  const cls = ["aw-badge", `aw-badge--${variant}`, className]
    .filter(Boolean)
    .join(" ");
  return (
    <span className={cls} {...rest}>
      {dot && <span className="aw-badge__dot" aria-hidden="true" />}
      {children}
      {onRemove && (
        <button
          type="button"
          className="aw-badge__remove"
          aria-label="Remove"
          onClick={onRemove}
        >
          ×
        </button>
      )}
    </span>
  );
}
