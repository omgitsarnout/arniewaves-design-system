import { Icon } from "./Icon.jsx";

/**
 * Pagination — page numbers with prev/next and ellipsis truncation.
 * Props: page (1-based), total, onChange(page), siblings
 * @category Navigation
 */
export function Pagination({ page = 1, total = 1, onChange, siblings = 1, className = "" }) {
  const range = (a, b) => (b >= a ? Array.from({ length: b - a + 1 }, (_, i) => a + i) : []);
  const left = Math.max(2, page - siblings);
  const right = Math.min(total - 1, page + siblings);

  const pages = [];
  const push = (v) => {
    if (pages[pages.length - 1] !== v) pages.push(v);
  };
  push(1);
  if (left > 2) push("…");
  range(left, right).forEach(push);
  if (right < total - 1) push("…");
  if (total > 1) push(total);

  return (
    <nav className={["aw-pagination", className].filter(Boolean).join(" ")} aria-label="Pagination">
      <button
        type="button"
        className="aw-page aw-page--nav"
        disabled={page <= 1}
        aria-label="Previous page"
        onClick={() => onChange?.(page - 1)}
      >
        <Icon name="chevron-left" size={16} />
      </button>
      {pages.map((p, i) =>
        p === "…" ? (
          <span key={`e${i}`} className="aw-page__ellipsis" aria-hidden="true">
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            className={["aw-page", p === page && "is-active"].filter(Boolean).join(" ")}
            aria-current={p === page ? "page" : undefined}
            onClick={() => onChange?.(p)}
          >
            {p}
          </button>
        ),
      )}
      <button
        type="button"
        className="aw-page aw-page--nav"
        disabled={page >= total}
        aria-label="Next page"
        onClick={() => onChange?.(page + 1)}
      >
        <Icon name="chevron-right" size={16} />
      </button>
    </nav>
  );
}
