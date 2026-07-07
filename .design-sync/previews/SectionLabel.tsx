import { SectionLabel } from "@omgitsarnout/arniewaves-design-system";

export const Eyebrow = () => (
  <div style={{ maxWidth: 420 }}>
    <SectionLabel>What's in the box</SectionLabel>
    <h2 style={{ margin: "6px 0 0" }}>AudioTeleporter</h2>
  </div>
);

export const SectionEyebrows = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 420 }}>
    <div>
      <SectionLabel>Surfaces</SectionLabel>
      <h2 style={{ margin: "6px 0 0" }}>Cards</h2>
    </div>
    <div>
      <SectionLabel>Iconography</SectionLabel>
      <h2 style={{ margin: "6px 0 0" }}>Icons</h2>
    </div>
    <div>
      <SectionLabel>Pricing</SectionLabel>
      <h2 style={{ margin: "6px 0 0" }}>Fair prices, great sound</h2>
    </div>
  </div>
);
