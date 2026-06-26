import { Badge } from "./Badge.jsx";
import { Button } from "./Button.jsx";
import { Waveform } from "./Waveform.jsx";

/**
 * ProductCard — the flagship composite.
 * Sand thumbnail w/ waveform, marker-pen name, price badge, mono description,
 * format metadata, full-width primary CTA.
 */
export function ProductCard({
  name,
  price,
  description,
  formats = [],
  cta = "Add to cart",
  onCtaClick,
  seed = 1,
  className = "",
  ...rest
}) {
  return (
    <div className={["aw-product", className].filter(Boolean).join(" ")} {...rest}>
      <div className="aw-product__thumb">
        <Waveform seed={seed} />
      </div>
      <div className="aw-product__body">
        <div className="aw-product__head">
          <h3 className="aw-product__name">{name}</h3>
          {price != null && <Badge variant="orange">{price}</Badge>}
        </div>
        {description && <p className="aw-product__desc">{description}</p>}
        {formats.length > 0 && (
          <p className="aw-product__meta">{formats.join(" · ")}</p>
        )}
      </div>
      <div className="aw-product__foot">
        <Button variant="primary" fullWidth onClick={onCtaClick}>
          {cta}
        </Button>
      </div>
    </div>
  );
}
