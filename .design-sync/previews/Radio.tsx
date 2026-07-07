import { useState } from "react";
import { Radio } from "@omgitsarnout/arniewaves-design-system";

export const TierGroup = () => {
  const [tier, setTier] = useState("pro");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 360 }}>
      <Radio name="tier" label="Hobby — $19" checked={tier === "hobby"} onChange={() => setTier("hobby")} />
      <Radio name="tier" label="Pro — $39" checked={tier === "pro"} onChange={() => setTier("pro")} />
      <Radio name="tier" label="Studio — $89" checked={tier === "studio"} onChange={() => setTier("studio")} />
    </div>
  );
};

export const WithDescriptions = () => {
  const [quality, setQuality] = useState("balanced");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 360 }}>
      <Radio
        name="quality"
        label="Low-latency"
        description="Fastest path, slight quality trade-off."
        checked={quality === "low"}
        onChange={() => setQuality("low")}
      />
      <Radio
        name="quality"
        label="Balanced"
        description="Recommended for most sessions."
        checked={quality === "balanced"}
        onChange={() => setQuality("balanced")}
      />
      <Radio
        name="quality"
        label="High-fidelity"
        description="Lossless, higher CPU use."
        checked={quality === "hifi"}
        onChange={() => setQuality("hifi")}
      />
    </div>
  );
};

export const States = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 360 }}>
    <Radio name="states" label="Selected" defaultChecked />
    <Radio name="states" label="Unselected" />
    <Radio name="states-disabled" label="Unavailable" disabled />
  </div>
);
