import { useCallback, useId, useRef } from "react";

/**
 * Knob — rotary parameter control, the audio-plugin staple.
 * Drag up/down (or use arrow keys) to change the value; the indicator sweeps
 * from -135° to +135°. Pointer events, so it works with touch.
 *
 * Props: label, value, onChange(number), min, max, step, size, valueLabel, disabled
 */
export function Knob({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  size = 64,
  valueLabel,
  disabled = false,
  className = "",
}) {
  const id = useId();
  const dragRef = useRef(null);

  const range = max - min || 1;
  const pct = (value - min) / range; // 0..1
  const angle = -135 + pct * 270;

  const clamp = useCallback(
    (v) => Math.min(max, Math.max(min, Math.round(v / step) * step)),
    [min, max, step],
  );

  const onPointerDown = (e) => {
    if (disabled) return;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    dragRef.current = { y: e.clientY, value };
  };
  const onPointerMove = (e) => {
    if (!dragRef.current) return;
    const dy = dragRef.current.y - e.clientY; // up = increase
    const next = clamp(dragRef.current.value + (dy / 150) * range);
    if (next !== value) onChange?.(next);
  };
  const endDrag = () => {
    dragRef.current = null;
  };

  const onKeyDown = (e) => {
    if (disabled) return;
    let next = value;
    if (e.key === "ArrowUp" || e.key === "ArrowRight") next = clamp(value + step);
    else if (e.key === "ArrowDown" || e.key === "ArrowLeft") next = clamp(value - step);
    else if (e.key === "Home") next = min;
    else if (e.key === "End") next = max;
    else return;
    e.preventDefault();
    onChange?.(next);
  };

  // describe an SVG arc for the active track
  const R = 42;
  const polar = (deg) => {
    const rad = ((deg - 90) * Math.PI) / 180;
    return [50 + R * Math.cos(rad), 50 + R * Math.sin(rad)];
  };
  const [sx, sy] = polar(-135);
  const [ex, ey] = polar(angle);
  const [fx, fy] = polar(135); // full-range end
  const large = angle - -135 > 180 ? 1 : 0;

  return (
    <div className={["aw-knob", disabled && "is-disabled", className].filter(Boolean).join(" ")}>
      <div
        className="aw-knob__dial"
        role="slider"
        tabIndex={disabled ? -1 : 0}
        aria-label={label}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-labelledby={label ? `${id}-lbl` : undefined}
        style={{ width: size, height: size }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onKeyDown={onKeyDown}
      >
        <svg viewBox="0 0 100 100" className="aw-knob__svg">
          <path
            className="aw-knob__track-bg"
            d={`M ${sx} ${sy} A ${R} ${R} 0 1 1 ${fx} ${fy}`}
          />
          {pct > 0.001 && (
            <path
              className="aw-knob__track"
              d={`M ${sx} ${sy} A ${R} ${R} 0 ${large} 1 ${ex} ${ey}`}
            />
          )}
          <circle className="aw-knob__face" cx="50" cy="50" r="31" />
          <line
            className="aw-knob__pointer"
            x1="50"
            y1="50"
            x2="50"
            y2="24"
            transform={`rotate(${angle} 50 50)`}
          />
        </svg>
      </div>
      {label && (
        <span className="aw-knob__label" id={`${id}-lbl`}>
          {label}
        </span>
      )}
      <span className="aw-knob__value">{valueLabel ? valueLabel(value) : value}</span>
    </div>
  );
}
