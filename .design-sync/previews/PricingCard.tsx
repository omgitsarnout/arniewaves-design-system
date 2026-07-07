import { PricingCard } from "@omgitsarnout/arniewaves-design-system";

export const Tiers = () => (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, alignItems: "start" }}>
    <PricingCard
      name="Free"
      price="$0"
      period="/mo"
      description="Kick the tires. Perfect for trying AudioTeleporter at home."
      cta="Get started"
      features={[
        "2 simultaneous streams",
        "128 kbps audio",
        "Local network only",
        { label: "Lossless audio", included: false },
        { label: "Priority routing", included: false },
        { label: "Email support", included: false },
      ]}
    />
    <PricingCard
      name="Basic"
      price="$8"
      period="/mo"
      description="For the hobbyist with a small rig and a few collaborators."
      cta="Choose Basic"
      features={[
        "10 simultaneous streams",
        "320 kbps audio",
        "Internet relay",
        { label: "Lossless audio", included: false },
        "Email support",
        { label: "Priority routing", included: false },
      ]}
    />
    <PricingCard
      name="Pro"
      price="$20"
      period="/mo"
      featured
      badge="Most popular"
      description="Everything, uncompressed, for the working studio."
      cta="Go Pro"
      features={[
        { label: "Unlimited streams" },
        { label: "Lossless / 24-bit", note: "up to 192 kHz" },
        "Internet relay + failover",
        "Priority routing",
        "Priority email + chat support",
        "Multi-machine license",
      ]}
    />
  </div>
);
