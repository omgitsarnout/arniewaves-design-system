import { useState } from "react";
import { Checkbox } from "@omgitsarnout/arniewaves-design-system";

export const Default = () => {
  const [agree, setAgree] = useState(true);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 360 }}>
      <Checkbox
        label="Email me about updates"
        description="A few times a year, no spam."
        checked={agree}
        onChange={(e) => setAgree(e.target.checked)}
      />
    </div>
  );
};

export const States = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 360 }}>
    <Checkbox label="Include source presets" defaultChecked />
    <Checkbox label="Auto-update plugins" />
    <Checkbox label="Unavailable option" disabled />
    <Checkbox label="Locked (on)" defaultChecked disabled />
  </div>
);

export const WithDescription = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 360 }}>
    <Checkbox
      label="High-fidelity encode"
      description="Lossless 24-bit transport. Uses more CPU."
      defaultChecked
    />
  </div>
);
