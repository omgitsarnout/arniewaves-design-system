import { forwardRef, useId } from "react";

/**
 * Slider — a styled range input (native, so touch + a11y come for free).
 * The filled portion is driven by a `--pct` CSS variable.
 *
 * Props: label, value, onChange(number), min, max, step, showValue,
 *        valueLabel(v)=>node, disabled, fullWidth
 * @category Forms
 */
export const Slider = forwardRef(function Slider(
  {
    label,
    value,
    onChange,
    min = 0,
    max = 100,
    step = 1,
    showValue = true,
    valueLabel,
    disabled = false,
    fullWidth = false,
    id,
    className = "",
    ...rest
  },
  ref,
) {
  const autoId = useId();
  const inputId = id || autoId;
  const pct = max === min ? 0 : ((value - min) / (max - min)) * 100;

  return (
    <div
      className={["aw-field", fullWidth && "aw-field--block", className]
        .filter(Boolean)
        .join(" ")}
    >
      {(label || showValue) && (
        <div className="aw-slider__top">
          {label && (
            <label className="aw-field__label" htmlFor={inputId}>
              {label}
            </label>
          )}
          {showValue && (
            <span className="aw-slider__value">
              {valueLabel ? valueLabel(value) : value}
            </span>
          )}
        </div>
      )}
      <input
        ref={ref}
        id={inputId}
        type="range"
        className="aw-slider"
        style={{ "--pct": `${pct}%` }}
        value={value}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        onChange={(e) => onChange?.(Number(e.target.value))}
        {...rest}
      />
    </div>
  );
});
