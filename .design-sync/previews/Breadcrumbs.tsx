import { Breadcrumbs } from "@omgitsarnout/arniewaves-design-system";

export const Trail = () => (
  <Breadcrumbs
    items={[
      { label: "Home", href: "#" },
      { label: "Plugins", href: "#" },
      { label: "AudioTeleporter" },
    ]}
  />
);

export const PresetTrail = () => (
  <Breadcrumbs
    items={[
      { label: "Home", href: "#" },
      { label: "Presets", href: "#" },
      { label: "Live Rig", href: "#" },
      { label: "Stage Monitor" },
    ]}
  />
);
