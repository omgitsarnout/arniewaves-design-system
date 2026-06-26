/** Card — generic surface. 0.5px border, lg radius. */
export function Card({ children, className = "", padded = true, ...rest }) {
  return (
    <div
      className={["aw-card", padded && "aw-card--padded", className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </div>
  );
}
