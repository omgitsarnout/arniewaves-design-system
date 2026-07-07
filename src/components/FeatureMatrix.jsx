import { Badge } from "./Badge.jsx";
import { Button } from "./Button.jsx";
import { Icon } from "./Icon.jsx";

/**
 * FeatureMatrix — "compare all features" grid: features down the rows, tiers
 * across the columns. Booleans render as check / dash; strings render verbatim.
 * The featured tier column is tinted. On mobile it scrolls horizontally with the
 * feature-name column pinned, so comparisons stay legible.
 *
 * Props:
 *   tiers: Array<{ key, name, price?, period?, featured?, badge?, cta? }>
 *   groups: Array<{ label?, features: Array<{ label, values: Record<tierKey, boolean|string> }> }>
 *   footer: render a CTA button row (default true)
 *   onChoose(tierKey)
 * @category Data-Display
 */
export function FeatureMatrix({
  tiers = [],
  groups = [],
  footer = true,
  onChoose,
  className = "",
  ...rest
}) {
  const renderCell = (v) => {
    if (v === true)
      return <Icon name="check" size={17} className="aw-matrix__yes" aria-label="Included" />;
    if (v === false || v == null)
      return <span className="aw-matrix__no" aria-label="Not included">–</span>;
    return <span className="aw-matrix__val">{v}</span>;
  };

  return (
    <div className={["aw-matrix-wrap", className].filter(Boolean).join(" ")} {...rest}>
      <table className="aw-matrix">
        <thead>
          <tr>
            <td className="aw-matrix__corner" />
            {tiers.map((t) => (
              <th
                key={t.key}
                scope="col"
                className={t.featured ? "aw-matrix__th is-featured" : "aw-matrix__th"}
              >
                {t.featured && t.badge && (
                  <Badge variant="orange" dot>
                    {t.badge}
                  </Badge>
                )}
                <span className="aw-matrix__name">{t.name}</span>
                {t.price != null && (
                  <span className="aw-matrix__price">
                    {t.price}
                    {t.period && <span className="aw-matrix__period">{t.period}</span>}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>

        {groups.map((g, gi) => (
          <tbody key={gi}>
            {g.label && (
              <tr className="aw-matrix__grouprow">
                <th scope="colgroup" colSpan={tiers.length + 1} className="aw-matrix__group">
                  {g.label}
                </th>
              </tr>
            )}
            {g.features.map((f, fi) => (
              <tr key={fi}>
                <th scope="row" className="aw-matrix__feature">
                  {f.label}
                </th>
                {tiers.map((t) => (
                  <td
                    key={t.key}
                    className={t.featured ? "aw-matrix__cell is-featured" : "aw-matrix__cell"}
                  >
                    {renderCell(f.values[t.key])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ))}

        {footer && (
          <tfoot>
            <tr>
              <td className="aw-matrix__corner" />
              {tiers.map((t) => (
                <td
                  key={t.key}
                  className={t.featured ? "aw-matrix__cell is-featured" : "aw-matrix__cell"}
                >
                  <Button
                    variant={t.featured ? "primary" : "outline"}
                    size="sm"
                    fullWidth
                    onClick={() => onChoose?.(t.key)}
                  >
                    {t.cta || "Choose"}
                  </Button>
                </td>
              ))}
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
}
