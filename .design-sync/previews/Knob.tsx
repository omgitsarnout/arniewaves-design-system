import { useState } from "react";
import { Knob } from "@omgitsarnout/arniewaves-design-system";

export const Default = () => {
  const [gain, setGain] = useState(70);
  const [mix, setMix] = useState(35);
  return (
    <div style={{ display: "flex", gap: 32, alignItems: "flex-end" }}>
      <Knob label="Gain" value={gain} onChange={setGain} valueLabel={(v) => `${v}%`} />
      <Knob label="Mix" value={mix} onChange={setMix} valueLabel={(v) => `${v}%`} />
    </div>
  );
};

export const Rack = () => {
  const [drive, setDrive] = useState(58);
  const [tone, setTone] = useState(42);
  const [output, setOutput] = useState(80);
  return (
    <div style={{ display: "flex", gap: 32, alignItems: "flex-end" }}>
      <Knob label="Drive" value={drive} onChange={setDrive} valueLabel={(v) => `${v}%`} />
      <Knob label="Tone" value={tone} onChange={setTone} valueLabel={(v) => `${v}%`} />
      <Knob label="Output" value={output} onChange={setOutput} valueLabel={(v) => `${v} dB`} />
    </div>
  );
};
