import { EmptyState, Button } from "@omgitsarnout/arniewaves-design-system";

export const EmptyCart = () => (
  <EmptyState
    icon="shopping-cart"
    title="Your cart is empty"
    description="Browse the catalog and add a tool or two — Arnie's waiting."
    action={
      <Button variant="primary" size="sm">
        Browse plugins
      </Button>
    }
  />
);

export const NoPresets = () => (
  <EmptyState
    icon="folder"
    title="No presets yet"
    description="Save a patch from AudioTeleporter and it'll show up right here."
    action={
      <Button variant="outline" size="sm">
        Create preset
      </Button>
    }
  />
);

export const NoResults = () => (
  <EmptyState
    icon="search"
    title="Nothing matched that search"
    description="Try a different name — maybe just 'teleport'."
  />
);
