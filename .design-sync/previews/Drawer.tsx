import { Drawer, Button, Stepper } from "@omgitsarnout/arniewaves-design-system";

export const CartDrawer = () => (
  <Drawer
    open
    onClose={() => {}}
    side="right"
    title="Your cart"
    footer={
      <Button variant="primary" fullWidth>
        Checkout · $39
      </Button>
    }
  >
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span style={{ fontWeight: 700 }}>AudioTeleporter</span>
      <Stepper value={1} onChange={() => {}} min={1} max={10} size="sm" />
    </div>
    <p style={{ marginTop: 16 }}>
      Subtotal: $39.00 — shipping is free (it's a download, after all).
    </p>
  </Drawer>
);
