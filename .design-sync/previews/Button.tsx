import { Button, Icon } from "@omgitsarnout/arniewaves-design-system";

export const Variants = () => (
  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
    <Button variant="primary">Add to cart</Button>
    <Button variant="outline">Learn more</Button>
    <Button variant="ghost">Cancel</Button>
  </div>
);

export const Sizes = () => (
  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
    <Button variant="primary" size="sm">Small</Button>
    <Button variant="primary" size="md">Medium</Button>
    <Button variant="primary" size="lg">Large</Button>
  </div>
);

export const States = () => (
  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
    <Button variant="primary" loading>Processing</Button>
    <Button variant="primary" disabled>Sold out</Button>
  </div>
);

export const WithIcons = () => (
  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
    <Button variant="outline" leadingIcon={<Icon name="download" size={15} />}>Download</Button>
    <Button variant="primary" leadingIcon={<Icon name="play" size={14} />}>Preview</Button>
  </div>
);
