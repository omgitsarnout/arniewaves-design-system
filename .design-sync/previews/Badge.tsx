import { Badge } from "@omgitsarnout/arniewaves-design-system";

export const Variants = () => (
  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
    <Badge variant="orange">$39</Badge>
    <Badge variant="sand">VST3</Badge>
    <Badge variant="outline">Beta</Badge>
  </div>
);

export const Tags = () => (
  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
    <Badge variant="sand">VST3</Badge>
    <Badge variant="sand">AU</Badge>
    <Badge variant="sand">AAX</Badge>
    <Badge variant="sand">CLAP</Badge>
    <Badge variant="sand">Low latency</Badge>
  </div>
);

export const WithDot = () => (
  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
    <Badge variant="orange" dot>New</Badge>
    <Badge variant="sand" dot>Shipping</Badge>
  </div>
);

export const Removable = () => (
  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
    <Badge variant="sand" onRemove={() => {}}>macOS</Badge>
    <Badge variant="sand" onRemove={() => {}}>Windows</Badge>
    <Badge variant="orange" onRemove={() => {}}>On sale</Badge>
  </div>
);
