import { Avatar } from "./Avatar.jsx";
import { Icon } from "./Icon.jsx";

/**
 * Testimonial — quote card with optional star rating and an author row.
 * Props: quote, name, role, avatarSrc, rating (0–5)
 */
export function Testimonial({
  quote,
  name,
  role,
  avatarSrc,
  rating,
  className = "",
}) {
  return (
    <figure className={["aw-testimonial", className].filter(Boolean).join(" ")}>
      {rating != null && (
        <div className="aw-testimonial__rating" aria-label={`${rating} out of 5`}>
          {Array.from({ length: 5 }, (_, i) => (
            <Icon
              key={i}
              name="star"
              size={14}
              className={i < rating ? "aw-star is-on" : "aw-star"}
            />
          ))}
        </div>
      )}
      <blockquote className="aw-testimonial__quote">{quote}</blockquote>
      <figcaption className="aw-testimonial__author">
        <Avatar name={name} src={avatarSrc} size={38} />
        <span className="aw-testimonial__who">
          <span className="aw-testimonial__name">{name}</span>
          {role && <span className="aw-testimonial__role">{role}</span>}
        </span>
      </figcaption>
    </figure>
  );
}
