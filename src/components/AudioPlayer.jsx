import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon.jsx";
import { Waveform } from "./Waveform.jsx";

function fmt(sec) {
  const s = Math.max(0, Math.floor(sec));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

/**
 * AudioPlayer — waveform scrubber + transport. Self-contained demo player that
 * simulates playback over `duration` seconds (no real <audio> needed, but you
 * can wire `onSeek`/`onPlay`/`onPause` to one). Click/scrub the waveform to seek.
 * Stacks cleanly on mobile.
 *
 * Props: title, artist, duration (s), seed, onPlay, onPause, onSeek(seconds)
 * @category Audio
 */
export function AudioPlayer({
  title = "Untitled",
  artist,
  duration = 184,
  seed = 5,
  onPlay,
  onPause,
  onSeek,
  className = "",
}) {
  const [playing, setPlaying] = useState(false);
  const [t, setT] = useState(0); // seconds elapsed
  const trackRef = useRef(null);
  const rafRef = useRef(0);
  const lastRef = useRef(0);

  useEffect(() => {
    if (!playing) return;
    lastRef.current = 0;
    const tick = (ts) => {
      if (lastRef.current) {
        const dt = (ts - lastRef.current) / 1000;
        setT((prev) => {
          const next = prev + dt;
          if (next >= duration) {
            setPlaying(false);
            return duration;
          }
          return next;
        });
      }
      lastRef.current = ts;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [playing, duration]);

  const pct = duration ? (t / duration) * 100 : 0;

  const toggle = () => {
    setPlaying((p) => {
      const next = !p;
      if (next) {
        if (t >= duration) setT(0);
        onPlay?.();
      } else onPause?.();
      return next;
    });
  };

  const seekFromEvent = (e) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX ?? rect.left) - rect.left;
    const ratio = Math.min(1, Math.max(0, x / rect.width));
    const secs = ratio * duration;
    setT(secs);
    onSeek?.(secs);
  };

  return (
    <div className={["aw-player", className].filter(Boolean).join(" ")}>
      <button
        type="button"
        className="aw-player__play"
        aria-label={playing ? "Pause" : "Play"}
        aria-pressed={playing}
        onClick={toggle}
      >
        <Icon name={playing ? "pause" : "play"} size={20} />
      </button>

      <div className="aw-player__main">
        <div className="aw-player__meta">
          <span className="aw-player__title">{title}</span>
          {artist && <span className="aw-player__artist">{artist}</span>}
        </div>

        <div
          ref={trackRef}
          className="aw-player__track"
          style={{ "--played": `${pct}%` }}
          role="slider"
          tabIndex={0}
          aria-label="Seek"
          aria-valuemin={0}
          aria-valuemax={Math.floor(duration)}
          aria-valuenow={Math.floor(t)}
          onClick={seekFromEvent}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") setT((v) => Math.min(duration, v + 5));
            else if (e.key === "ArrowLeft") setT((v) => Math.max(0, v - 5));
            else return;
            e.preventDefault();
          }}
        >
          <div className="aw-player__wave aw-player__wave--base">
            <Waveform seed={seed} bars={48} />
          </div>
          <div className="aw-player__wave aw-player__wave--played">
            <Waveform seed={seed} bars={48} />
          </div>
          <span className="aw-player__playhead" />
        </div>

        <div className="aw-player__times">
          <span>{fmt(t)}</span>
          <span>{fmt(duration)}</span>
        </div>
      </div>
    </div>
  );
}
