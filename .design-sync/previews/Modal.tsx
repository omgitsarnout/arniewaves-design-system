import { Modal, Button, TextField } from "@omgitsarnout/arniewaves-design-system";

export const LicenseDialog = () => (
  <Modal
    open
    onClose={() => {}}
    title="Activate AudioTeleporter"
    footer={
      <>
        <Button variant="ghost">Not now</Button>
        <Button variant="primary">Activate</Button>
      </>
    }
  >
    <p style={{ marginTop: 0 }}>
      Paste the license key from your order email. One key activates up to three
      machines — handy for a laptop rig and the studio desktop.
    </p>
    <TextField label="License key" placeholder="AWAVE-XXXX-XXXX-XXXX" fullWidth />
    <p style={{ marginBottom: 0 }}>
      Esc closes this, focus is trapped inside, and background scroll is locked —
      the usual dialog niceties.
    </p>
  </Modal>
);
