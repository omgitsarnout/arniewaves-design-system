import { Hero, Button, Icon, Waveform } from "@omgitsarnout/arniewaves-design-system";

export const Landing = () => (
  <Hero
    eyebrow="New · v1.3"
    title="Send audio anywhere."
    subtitle="Low latency, high fidelity, zero faff. The teleporter your rack has been missing — now with relay failover."
    actions={
      <>
        <Button variant="primary" leadingIcon={<Icon name="download" size={15} />}>
          Get AudioTeleporter
        </Button>
        <Button variant="outline" leadingIcon={<Icon name="play" size={14} />}>
          Hear it
        </Button>
      </>
    }
    media={
      <div className="aw-product__thumb" style={{ height: 150 }}>
        <Waveform seed={9} bars={40} />
      </div>
    }
  />
);
