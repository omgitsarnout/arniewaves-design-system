import { useState } from "react";
import { Slider } from "@omgitsarnout/arniewaves-design-system";

export const Default = () => {
  const [gain, setGain] = useState(6);
  const [mix, setMix] = useState(35);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 360 }}>
      <Slider label="Input gain" value={gain} onChange={setGain} valueLabel={(v) => `${v} dB`} fullWidth />
      <Slider label="Dry / wet" value={mix} onChange={setMix} valueLabel={(v) => `${v}%`} fullWidth />
    </div>
  );
};

export const WithValueLabel = () => {
  const [latency, setLatency] = useState(12);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 360 }}>
      <Slider
        label="Buffer latency"
        value={latency}
        onChange={setLatency}
        min={0}
        max={48}
        step={2}
        valueLabel={(v) => `${v} ms`}
        fullWidth
      />
    </div>
  );
};

export const States = () => {
  const [vol, setVol] = useState(70);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 360 }}>
      <Slider label="Output volume" value={vol} onChange={setVol} valueLabel={(v) => `${v}%`} fullWidth />
      <Slider label="Locked (disabled)" value={40} onChange={() => {}} valueLabel={(v) => `${v}%`} disabled fullWidth />
    </div>
  );
};
