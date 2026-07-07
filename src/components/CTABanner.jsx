/**
 * CTABanner — full-width call-to-action band. Put buttons in `children`.
 * Props: title, description, tone "surface"|"primary", children (actions)
 * @category Marketing
 */
export function CTABanner({
  title,
  description,
  tone = "surface",
  children,
  className = "",
}) {
  return (
    <div
      className={["aw-cta", `aw-cta--${tone}`, className].filter(Boolean).join(" ")}
    >
      <div className="aw-cta__text">
        <h3 className="aw-cta__title">{title}</h3>
        {description && <p className="aw-cta__desc">{description}</p>}
      </div>
      {children && <div className="aw-cta__actions">{children}</div>}
    </div>
  );
}
