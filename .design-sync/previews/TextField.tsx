import { useState } from "react";
import { TextField } from "@omgitsarnout/arniewaves-design-system";

export const Default = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 360 }}>
    <TextField
      label="License email"
      placeholder="you@studio.com"
      hint="Where we'll send your download + license key."
      defaultValue="arnie@arniewaves.audio"
      fullWidth
    />
  </div>
);

export const Adornments = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 360 }}>
    <TextField
      label="Coupon"
      placeholder="ARNIE10"
      leading={<span>%</span>}
      fullWidth
    />
    <TextField
      label="Search presets"
      placeholder="Tape, plate, spring…"
      trailing={<span>⌕</span>}
      fullWidth
    />
  </div>
);

export const Sizes = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 360 }}>
    <TextField label="License key (sm)" size="sm" placeholder="AWAVE-XXXX-XXXX-XXXX" fullWidth />
    <TextField label="License key (md)" size="md" placeholder="AWAVE-XXXX-XXXX-XXXX" fullWidth />
  </div>
);

export const States = () => {
  const [email, setEmail] = useState("arnie@@studio");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 360 }}>
      <TextField
        label="License email"
        placeholder="you@studio.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error="That doesn't look like a valid email."
        required
        fullWidth
      />
      <TextField label="Order reference" defaultValue="AW-20294" disabled fullWidth />
    </div>
  );
};
