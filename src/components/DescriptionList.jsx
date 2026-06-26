/**
 * DescriptionList / SpecList — key→value pairs (e.g. plugin specs).
 * Term left, value right on desktop; stacks on mobile.
 * Props: items: Array<{ term, description }>
 * @category Data-Display
 */
export function DescriptionList({ items = [], className = "" }) {
  return (
    <dl className={["aw-dl", className].filter(Boolean).join(" ")}>
      {items.map((it, i) => (
        <div className="aw-dl__row" key={i}>
          <dt className="aw-dl__term">{it.term}</dt>
          <dd className="aw-dl__desc">{it.description}</dd>
        </div>
      ))}
    </dl>
  );
}
