import { Badge } from "./Badge.jsx";
import { Button } from "./Button.jsx";
import { Icon } from "./Icon.jsx";

/**
 * PricingCard — a single subscription tier for side-by-side comparison.
 *
 * Props:
 *   name        tier name (marker-pen)
 *   price       headline price, e.g. "$0", "$8", "Free"
 *   period      suffix next to price, e.g. "/mo"
 *   description one-liner under the name
 *   features    Array<string | { label, included?, note? }>
 *               `included: false` renders a muted, struck-through row.
 *   featured    highlight this tier (primary border + lift)
 *   badge       label shown on a featured card, e.g. "Most popular"
 *   cta         button label (default "Choose plan")
 *   ctaVariant  Button variant; defaults to primary when featured, else outline
 *   onCtaClick
 *
 * Drop several into `.aw-tiers` (or any grid) to form a comparison.
 * @category Commerce
 */
export function PricingCard({
  name,
  price,
  period = "/mo",
  description,
  features = [],
  featured = false,
  badge = "Most popular",
  cta = "Choose plan",
  ctaVariant,
  onCtaClick,
  className = "",
  ...rest
}) {
  const cls = ["aw-tier", featured && "aw-tier--featured", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cls} {...rest}>
      {featured && badge && (
        <div className="aw-tier__ribbon">
          <Badge variant="orange" dot>
            {badge}
          </Badge>
        </div>
      )}

      <div className="aw-tier__head">
        <h3 className="aw-tier__name">{name}</h3>
        {description && <p className="aw-tier__desc">{description}</p>}
      </div>

      <div className="aw-tier__price">
        <span className="aw-tier__amount">{price}</span>
        {period && <span className="aw-tier__period">{period}</span>}
      </div>

      <Button
        variant={ctaVariant || (featured ? "primary" : "outline")}
        fullWidth
        onClick={onCtaClick}
      >
        {cta}
      </Button>

      <ul className="aw-tier__features">
        {features.map((f, i) => {
          const item = typeof f === "string" ? { label: f, included: true } : f;
          const included = item.included !== false;
          return (
            <li
              key={i}
              className={[
                "aw-tier__feature",
                !included && "is-excluded",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <Icon
                name={included ? "check" : "close"}
                size={16}
                className="aw-tier__feature-icon"
              />
              <span className="aw-tier__feature-label">
                {item.label}
                {item.note && <span className="aw-tier__feature-note"> {item.note}</span>}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
