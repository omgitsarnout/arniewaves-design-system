import { Tooltip, Button, Badge } from "@omgitsarnout/arniewaves-design-system";

// Tooltip bubbles open on hover/focus (internal state). For a static preview we
// reveal them with a scoped style override so every placement is visible at once
// — the real component, real bubble, just forced visible.
export const Placements = () => (
  <>
    <style>{".aw-tooltip__bubble{opacity:1 !important;transform:scale(1) !important}"}</style>
    <div
      style={{
        display: "flex",
        gap: 56,
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        padding: "56px 32px",
      }}
    >
      <Tooltip label="Sends to any peer on your network">
        <Button variant="outline">Top</Button>
      </Tooltip>
      <Tooltip label="Shows below the trigger" placement="bottom">
        <Button variant="ghost">Bottom</Button>
      </Tooltip>
      <Tooltip label="To the left" placement="left">
        <Badge variant="sand">Left</Badge>
      </Tooltip>
      <Tooltip label="Also on keyboard focus" placement="right">
        <Button variant="ghost">Right</Button>
      </Tooltip>
    </div>
  </>
);
