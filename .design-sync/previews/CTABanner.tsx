import { CTABanner, Button } from "@omgitsarnout/arniewaves-design-system";

export const Surface = () => (
  <CTABanner
    tone="surface"
    title="Ready to teleport?"
    description="Try the full version free for 14 days. No card required."
  >
    <Button variant="primary">Start free trial</Button>
    <Button variant="ghost">Talk to Arnie</Button>
  </CTABanner>
);

export const Primary = () => (
  <CTABanner
    tone="primary"
    title="Ship your sound, anywhere."
    description="Join 12,000+ makers running AudioTeleporter in their rigs."
  >
    <Button variant="ghost">Get AudioTeleporter — $39</Button>
  </CTABanner>
);
