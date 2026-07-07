import { Accordion } from "@omgitsarnout/arniewaves-design-system";

export const FAQ = () => (
  <div style={{ maxWidth: 560 }}>
    <Accordion defaultValue="latency">
      <Accordion.Item value="latency" title="How low is the latency, really?">
        Sub-3 ms round trip on a local network, and typically under 30 ms over a
        decent internet connection with relay enabled.
      </Accordion.Item>
      <Accordion.Item value="formats" title="Which plugin formats are supported?">
        VST3, Audio Unit, AAX, and CLAP on both macOS (Universal) and Windows.
      </Accordion.Item>
      <Accordion.Item value="license" title="How many machines can I use one license on?">
        Up to three — handy for a laptop rig and a studio desktop. The Pro tier adds
        a multi-machine license for bigger setups.
      </Accordion.Item>
      <Accordion.Item value="refund" title="What's the refund policy?">
        14 days, no questions asked. Arnie would rather you were happy than stuck.
      </Accordion.Item>
    </Accordion>
  </div>
);
