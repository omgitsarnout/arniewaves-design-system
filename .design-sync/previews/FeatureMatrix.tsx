import { FeatureMatrix } from "@omgitsarnout/arniewaves-design-system";

const tiers = [
  { key: "free", name: "Free", price: "$0", period: "/mo", cta: "Get started" },
  { key: "basic", name: "Basic", price: "$8", period: "/mo", cta: "Choose Basic" },
  { key: "pro", name: "Pro", price: "$20", period: "/mo", featured: true, badge: "Popular", cta: "Go Pro" },
];

const groups = [
  {
    label: "Streaming",
    features: [
      { label: "Simultaneous streams", values: { free: "2", basic: "10", pro: "Unlimited" } },
      { label: "Audio quality", values: { free: "128 kbps", basic: "320 kbps", pro: "Lossless" } },
      { label: "Sample rate", values: { free: "44.1 kHz", basic: "48 kHz", pro: "192 kHz" } },
      { label: "Internet relay", values: { free: false, basic: true, pro: true } },
      { label: "Relay failover", values: { free: false, basic: false, pro: true } },
    ],
  },
  {
    label: "Workflow & support",
    features: [
      { label: "Priority routing", values: { free: false, basic: false, pro: true } },
      { label: "Multi-machine license", values: { free: false, basic: false, pro: true } },
      { label: "Email support", values: { free: false, basic: true, pro: true } },
      { label: "Priority chat support", values: { free: false, basic: false, pro: true } },
    ],
  },
];

export const TierComparison = () => (
  <FeatureMatrix tiers={tiers} groups={groups} />
);
