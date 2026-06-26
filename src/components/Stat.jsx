import { Icon } from "./Icon.jsx";

/**
 * Stat — a single metric/KPI. Optional `delta` with `trend` ("up"|"down")
 * renders a colored change indicator.
 * Props: label, value, delta, trend, icon (icon name or node)
 */
export function Stat({ label, value, delta, trend, icon, className = "" }) {
  return (
    <div className={["aw-stat", className].filter(Boolean).join(" ")}>
      {icon && (
        <span className="aw-stat__icon">
          {typeof icon === "string" ? <Icon name={icon} size={18} /> : icon}
        </span>
      )}
      <span className="aw-stat__value">{value}</span>
      <span className="aw-stat__label">{label}</span>
      {delta != null && (
        <span
          className={["aw-stat__delta", trend && `is-${trend}`].filter(Boolean).join(" ")}
        >
          {trend === "up" && <Icon name="arrow-up-right" size={13} />}
          {trend === "down" && <Icon name="arrow-down" size={13} />}
          {delta}
        </span>
      )}
    </div>
  );
}
