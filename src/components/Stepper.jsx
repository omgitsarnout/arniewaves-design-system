import { Icon } from "./Icon.jsx";

/**
 * Stepper — compact numeric stepper (e.g. cart quantity).
 * Props: value, onChange(number), min, max, step, label, size "sm"|"md"
 * @category Navigation
 */
export function Stepper({
  value,
  onChange,
  min = 0,
  max = Infinity,
  step = 1,
  label = "Quantity",
  size = "md",
  className = "",
}) {
  const set = (v) => onChange?.(Math.min(max, Math.max(min, v)));

  return (
    <div
      className={["aw-stepper", `aw-stepper--${size}`, className].filter(Boolean).join(" ")}
      role="group"
      aria-label={label}
    >
      <button
        type="button"
        className="aw-stepper__btn"
        aria-label="Decrease"
        disabled={value <= min}
        onClick={() => set(value - step)}
      >
        <Icon name="minus" size={15} />
      </button>
      <input
        className="aw-stepper__input"
        type="text"
        inputMode="numeric"
        value={value}
        aria-label={label}
        onChange={(e) => {
          const n = parseInt(e.target.value, 10);
          if (!Number.isNaN(n)) set(n);
        }}
      />
      <button
        type="button"
        className="aw-stepper__btn"
        aria-label="Increase"
        disabled={value >= max}
        onClick={() => set(value + step)}
      >
        <Icon name="plus" size={15} />
      </button>
    </div>
  );
}
