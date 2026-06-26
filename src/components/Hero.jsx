/**
 * Hero — page lede. Optional `media` slot puts a visual beside the copy
 * (stacks on mobile). Put CTAs in `actions`.
 * Props: eyebrow, title, subtitle, actions, media, align "left"|"center"
 */
export function Hero({
  eyebrow,
  title,
  subtitle,
  actions,
  media,
  align = "left",
  className = "",
}) {
  return (
    <section
      className={[
        "aw-hero",
        `aw-hero--${align}`,
        media && "aw-hero--split",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="aw-hero__content">
        {eyebrow && <p className="aw-hero__eyebrow">{eyebrow}</p>}
        <h1 className="aw-hero__title">{title}</h1>
        {subtitle && <p className="aw-hero__subtitle">{subtitle}</p>}
        {actions && <div className="aw-hero__actions">{actions}</div>}
      </div>
      {media && <div className="aw-hero__media">{media}</div>}
    </section>
  );
}
