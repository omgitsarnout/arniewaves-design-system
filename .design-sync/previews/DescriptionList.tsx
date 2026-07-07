import { DescriptionList, Card, SectionLabel } from "@omgitsarnout/arniewaves-design-system";

export const Specs = () => (
  <div style={{ maxWidth: 420 }}>
    <DescriptionList
      items={[
        { term: "Formats", description: "VST3 · AU · AAX · CLAP" },
        { term: "Platforms", description: "macOS (Universal) · Windows" },
        { term: "Sample rate", description: "44.1–192 kHz" },
        { term: "Latency", description: "Sub-3 ms (local network)" },
        { term: "License", description: "3 machines, lifetime updates" },
      ]}
    />
  </div>
);

export const InCard = () => (
  <div style={{ maxWidth: 420 }}>
    <Card>
      <SectionLabel>Tech specs</SectionLabel>
      <h2 style={{ margin: "8px 0 14px" }}>AudioTeleporter</h2>
      <DescriptionList
        items={[
          { term: "Formats", description: "VST3 · AU · AAX · CLAP" },
          { term: "Channels", description: "Mono · Stereo · 5.1" },
          { term: "Latency", description: "Sub-3 ms (local network)" },
          { term: "Price", description: "$39 — one-time" },
        ]}
      />
    </Card>
  </div>
);
