import { forwardRef } from "react";

/**
 * Button — Space Mono 700, 12px, 4px radius.
 * variant: "primary" | "outline" | "ghost"
 * size:    "sm" | "md" | "lg"
 */
export const Button = forwardRef(function Button(
  {
    variant = "primary",
    size = "md",
    fullWidth = false,
    loading = false,
    leadingIcon,
    trailingIcon,
    disabled,
    className = "",
    children,
    ...rest
  },
  ref,
) {
  const cls = [
    "aw-btn",
    `aw-btn--${variant}`,
    `aw-btn--${size}`,
    fullWidth && "aw-btn--block",
    loading && "is-loading",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      ref={ref}
      className={cls}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading && <span className="aw-btn__spinner" aria-hidden="true" />}
      {!loading && leadingIcon && (
        <span className="aw-btn__icon">{leadingIcon}</span>
      )}
      <span className="aw-btn__label">{children}</span>
      {!loading && trailingIcon && (
        <span className="aw-btn__icon">{trailingIcon}</span>
      )}
    </button>
  );
});
