import { useEffect, useRef, useState } from "react";

/**
 * LevelMeter — segmented VU-style meter. Controlled via `value` (0..1), or pass
 * `animated` to let it bounce on its own (handy for "now playing" flourishes).
 *
 * Props: value (0..1), segments, orientation "vertical"|"horizontal",
 *        channels (number of bars), animated, label
 */
export function LevelMeter({
  value = 0,
  segments = 12,
  orientation = "vertical",
  channels = 2,
  animated = false,
  label,
  className = "",
}) {
  const [levels, setLevels] = useState(() => Array.from({ length: channels }, () => value));
  const raf = useRef(0);

  useEffect(() => {
    if (!animated) {
      setLevels(Array.from({ length: channels }, () => value));
      return;
    }
    const targets = Array.from({ length: channels }, () => Math.random());
    let last = 0;
    const tick = (t) => {
      if (t - last > 90) {
        last = t;
        setLevels((prev) =>
          prev.map((v, i) => {
            if (Math.random() > 0.7) targets[i] = 0.35 + Math.random() * 0.65;
            return v + (targets[i] - v) * 0.5;
          }),
        );
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [animated, channels, value]);

  return (
    <div
      className={[
        "aw-meter",
        `aw-meter--${orientation}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      role="meter"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={1}
      aria-valuenow={Number(levels[0]?.toFixed(2))}
    >
      {levels.map((lvl, ci) => {
        const lit = Math.round(lvl * segments);
        return (
          <div className="aw-meter__channel" key={ci}>
            {Array.from({ length: segments }, (_, i) => {
              // segment index from the "quiet" end
              const idx = orientation === "vertical" ? segments - 1 - i : i;
              const on = idx < lit;
              const zone =
                idx >= segments - 2 ? "hi" : idx >= segments - 5 ? "mid" : "lo";
              return (
                <span
                  key={i}
                  className={["aw-meter__seg", `is-${zone}`, on && "is-on"]
                    .filter(Boolean)
                    .join(" ")}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
