import { useState } from "react";
import { Textarea } from "@omgitsarnout/arniewaves-design-system";

export const Default = () => (
  <div style={{ maxWidth: 360 }}>
    <Textarea
      label="Notes for the maker"
      placeholder="Tell Arnie what you're building…"
      hint="Optional. Arnie reads every one."
      defaultValue="Building a low-latency rig for live AudioTeleporter sets."
      fullWidth
    />
  </div>
);

export const Rows = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 360 }}>
    <Textarea label="Short release note" rows={2} placeholder="One-line changelog…" fullWidth />
    <Textarea label="Full changelog" rows={6} placeholder="v1.3 — lower jitter on flaky Wi-Fi…" fullWidth />
  </div>
);

export const States = () => {
  const [notes, setNotes] = useState("");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 360 }}>
      <Textarea
        label="Support request"
        placeholder="Describe the issue…"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        error="Please tell us a little about the problem."
        required
        fullWidth
      />
      <Textarea
        label="Internal note"
        defaultValue="Refunded — duplicate AudioTeleporter purchase."
        disabled
        fullWidth
      />
    </div>
  );
};
