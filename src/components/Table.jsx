/**
 * Table — data table that stays a real <table> on desktop and collapses into
 * labeled stacked cards on mobile (each cell keeps its column header via a
 * `data-label`, surfaced with CSS). No JS measurement — driven by a media query
 * in components.css, so it responds to viewport width.
 *
 * Props:
 *   columns: Array<{
 *     key,                  // row[key] is rendered if no `render`
 *     header,               // column title (also the mobile label)
 *     align?: "left"|"right"|"center",
 *     render?: (row, index) => node,  // custom cell content
 *   }>
 *   data:     Array<object>
 *   getRowKey?: (row, index) => string
 *   caption?:  string
 *   stickyHeader?: boolean
 * @category Data-Display
 */
export function Table({
  columns = [],
  data = [],
  getRowKey,
  caption,
  stickyHeader = false,
  className = "",
  ...rest
}) {
  const cls = [
    "aw-table",
    stickyHeader && "aw-table--sticky",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="aw-table-wrap" {...rest}>
      <table className={cls}>
        {caption && <caption className="aw-table__caption">{caption}</caption>}
        <thead>
          <tr>
            {columns.map((c) => (
              <th
                key={c.key}
                scope="col"
                className={c.align ? `aw-ta-${c.align}` : undefined}
              >
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={getRowKey ? getRowKey(row, i) : (row.id ?? i)}>
              {columns.map((c) => (
                <td
                  key={c.key}
                  data-label={c.header}
                  className={c.align ? `aw-ta-${c.align}` : undefined}
                >
                  {c.render ? c.render(row, i) : row[c.key]}
                </td>
              ))}
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td className="aw-table__empty" colSpan={columns.length}>
                Nothing here yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
