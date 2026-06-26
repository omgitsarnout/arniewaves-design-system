import { Icon } from "./Icon.jsx";

const VARIANT_ICON = {
  info: "info",
  success: "check-circle",
  warning: "alert",
  danger: "x-circle",
};

/**
 * Alert / Banner — inline message. variant: info | success | warning | danger.
 * Pass `onClose` to make it dismissible; `icon={false}` to drop the glyph.
 * @category Feedback
 */
export function Alert({
  variant = "info",
  title,
  children,
  icon = true,
  onClose,
  className = "",
}) {
  return (
    <div
      className={["aw-alert", `aw-alert--${variant}`, className].filter(Boolean).join(" ")}
      role={variant === "danger" || variant === "warning" ? "alert" : "status"}
    >
      {icon && (
        <Icon name={VARIANT_ICON[variant] || "info"} size={18} className="aw-alert__icon" />
      )}
      <div className="aw-alert__body">
        {title && <p className="aw-alert__title">{title}</p>}
        {children && <div className="aw-alert__msg">{children}</div>}
      </div>
      {onClose && (
        <button type="button" className="aw-alert__close" aria-label="Dismiss" onClick={onClose}>
          <Icon name="close" size={14} />
        </button>
      )}
    </div>
  );
}
