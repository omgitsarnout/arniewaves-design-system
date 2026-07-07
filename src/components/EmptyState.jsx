import { Icon } from "./Icon.jsx";

/**
 * EmptyState — friendly placeholder for empty lists / zero results.
 * Props: icon (name or node), title, description, action (node)
 * @category Feedback
 */
export function EmptyState({
  icon = "folder",
  title,
  description,
  action,
  className = "",
}) {
  return (
    <div className={["aw-empty", className].filter(Boolean).join(" ")}>
      <span className="aw-empty__icon">
        {typeof icon === "string" ? <Icon name={icon} size={26} /> : icon}
      </span>
      {title && <h3 className="aw-empty__title">{title}</h3>}
      {description && <p className="aw-empty__desc">{description}</p>}
      {action && <div className="aw-empty__action">{action}</div>}
    </div>
  );
}
