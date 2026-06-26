import { Card, SectionLabel, Button, Badge } from "@omgitsarnout/arniewaves-design-system";

export const Surface = () => (
  <div style={{ maxWidth: 420 }}>
    <Card>
      <SectionLabel>What's in the box</SectionLabel>
      <h2 style={{ margin: "8px 0 10px" }}>AudioTeleporter</h2>
      <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--aw-muted)", margin: 0 }}>
        Send audio anywhere with low latency and high fidelity. Pairs with everything
        in the rack — built from the same tokens as the rest of the system.
      </p>
      <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
        <Button variant="primary">Buy — $39</Button>
        <Button variant="ghost">Try the demo</Button>
      </div>
    </Card>
  </div>
);

export const WithBadges = () => (
  <div style={{ maxWidth: 420 }}>
    <Card>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <h2 style={{ margin: 0 }}>RackDelay</h2>
        <Badge variant="orange">New</Badge>
      </div>
      <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--aw-muted)", margin: "10px 0 14px" }}>
        Tape-style delay with a hand-tuned wow & flutter engine.
      </p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Badge variant="sand">VST3</Badge>
        <Badge variant="sand">AU</Badge>
        <Badge variant="sand">CLAP</Badge>
      </div>
    </Card>
  </div>
);

export const Unpadded = () => (
  <div style={{ maxWidth: 420 }}>
    <Card padded={false}>
      <div style={{ height: 96, background: "var(--aw-surface)", borderRadius: "4px 4px 0 0" }} />
      <div style={{ padding: 20 }}>
        <h2 style={{ margin: "0 0 6px" }}>Waveform thumbnail</h2>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--aw-muted)", margin: 0 }}>
          Use <code>padded={"{false}"}</code> to bleed media to the card edges.
        </p>
      </div>
    </Card>
  </div>
);
