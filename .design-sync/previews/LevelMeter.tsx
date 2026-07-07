import { LevelMeter } from "@omgitsarnout/arniewaves-design-system";

export const Output = () => (
  <div style={{ display: "flex", gap: 32, alignItems: "flex-end" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
      <LevelMeter animated channels={2} label="Output" />
      <span className="aw-knob__label">Output</span>
    </div>
  </div>
);

export const Stereo = () => (
  <div style={{ display: "flex", gap: 32, alignItems: "flex-end" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
      <LevelMeter animated channels={2} label="Master bus" />
      <span className="aw-knob__label">Master</span>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
      <LevelMeter value={0.65} channels={2} label="Send" />
      <span className="aw-knob__label">Send</span>
    </div>
  </div>
);
