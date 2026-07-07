/** SectionLabel — eyebrow label. Space Mono 700, 11px, letter-spaced, tertiary. * @category Foundations
*/
export function SectionLabel({ children, className = "", ...rest }) {
  return (
    <p className={["aw-section-label", className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </p>
  );
}
