import { useState } from "react";
import { Toggle } from "@omgitsarnout/arniewaves-design-system";

export const Default = () => {
  const [on, setOn] = useState(true);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 360 }}>
      <Toggle
        label="Low-latency mode"
        checked={on}
        onChange={(e) => setOn(e.target.checked)}
      />
    </div>
  );
};

export const Settings = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 360 }}>
    <Toggle label="Low-latency mode" defaultChecked />
    <Toggle label="High-fidelity encode" description="Uses more CPU." />
    <Toggle label="Auto-reconnect" defaultChecked />
    <Toggle label="Disabled" disabled />
  </div>
);

export const WithDescription = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 360 }}>
    <Toggle
      label="High-fidelity encode"
      description="Lossless 24-bit transport. Uses more CPU."
      defaultChecked
    />
  </div>
);
