import { Children } from "react";

function initialsOf(name = "") {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/**
 * Avatar — image, or initials fallback derived from `name`. Square-ish round.
 * Props: src, name, size, className
 * @category Data-Display
 */
export function Avatar({ src, name, size = 40, className = "", ...rest }) {
  return (
    <span
      className={["aw-avatar", className].filter(Boolean).join(" ")}
      style={{ width: size, height: size, fontSize: Math.round(size * 0.38) }}
      title={name}
      {...rest}
    >
      {src ? (
        <img className="aw-avatar__img" src={src} alt={name || ""} />
      ) : (
        <span className="aw-avatar__initials">{initialsOf(name) || "?"}</span>
      )}
    </span>
  );
}

/**
 * AvatarGroup — overlapping stack; `max` caps the visible count and adds a
 * "+N" chip for the remainder.
 * @category Data-Display
 */
export function AvatarGroup({ children, max, size, className = "", ...rest }) {
  const items = Children.toArray(children);
  const shown = max ? items.slice(0, max) : items;
  const extra = max ? items.length - shown.length : 0;
  return (
    <div className={["aw-avatar-group", className].filter(Boolean).join(" ")} {...rest}>
      {shown}
      {extra > 0 && (
        <span
          className="aw-avatar aw-avatar--more"
          style={size ? { width: size, height: size, fontSize: Math.round(size * 0.34) } : undefined}
        >
          +{extra}
        </span>
      )}
    </div>
  );
}
