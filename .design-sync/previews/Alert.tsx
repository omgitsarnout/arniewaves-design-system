import { Alert } from "@omgitsarnout/arniewaves-design-system";

export const Variants = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 480 }}>
    <Alert variant="success" title="License activated">
      You're all set on this machine.
    </Alert>
    <Alert variant="warning" title="Trial ending soon">
      3 days left — upgrade to keep your presets.
    </Alert>
    <Alert variant="danger" title="Connection lost" onClose={() => {}}>
      The relay dropped. Reconnecting…
    </Alert>
    <Alert variant="info">A new version (v1.3) is available.</Alert>
  </div>
);
