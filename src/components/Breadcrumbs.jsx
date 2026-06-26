import { Icon } from "./Icon.jsx";

/**
 * Breadcrumbs — trail navigation.
 * Props: items: Array<{ label, href? }>. The last item is the current page.
 */
export function Breadcrumbs({ items = [], className = "" }) {
  return (
    <nav className={["aw-breadcrumbs", className].filter(Boolean).join(" ")} aria-label="Breadcrumb">
      <ol className="aw-breadcrumbs__list">
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li className="aw-crumb" key={i}>
              {it.href && !last ? (
                <a href={it.href} className="aw-crumb__link">
                  {it.label}
                </a>
              ) : (
                <span className="aw-crumb__current" aria-current={last ? "page" : undefined}>
                  {it.label}
                </span>
              )}
              {!last && <Icon name="chevron-right" size={13} className="aw-crumb__sep" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
