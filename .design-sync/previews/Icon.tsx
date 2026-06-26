import { Icon } from "@omgitsarnout/arniewaves-design-system";

const cell = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  gap: 8,
  padding: "14px 8px",
  textAlign: "center" as const,
};

const label = {
  fontFamily: "var(--aw-font-body)",
  fontSize: 11,
  color: "var(--aw-muted)",
};

export const AudioIcons = () => {
  const names = ["play", "pause", "waveform", "volume", "knob", "sliders", "headphones", "mic", "music", "radio", "power", "bolt"];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 4, maxWidth: 420 }}>
      {names.map((n) => (
        <div key={n} style={cell}>
          <Icon name={n} />
          <span style={label}>{n}</span>
        </div>
      ))}
    </div>
  );
};

export const UIIcons = () => {
  const names = ["search", "download", "shopping-cart", "settings", "heart", "star", "check", "close", "menu", "filter", "tag", "share"];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 4, maxWidth: 420 }}>
      {names.map((n) => (
        <div key={n} style={cell}>
          <Icon name={n} />
          <span style={label}>{n}</span>
        </div>
      ))}
    </div>
  );
};

export const Sizes = () => (
  <div style={{ display: "flex", gap: 20, alignItems: "center", color: "var(--aw-primary)" }}>
    <Icon name="waveform" size={16} />
    <Icon name="waveform" size={24} />
    <Icon name="waveform" size={32} />
    <Icon name="waveform" size={48} />
  </div>
);
