import { useEffect, useRef } from "react";
import { Menu, Button, Icon } from "@omgitsarnout/arniewaves-design-system";

const ITEMS = [
  { label: "Share preset", icon: "share" },
  { label: "Duplicate", icon: "copy", shortcut: "⌘D" },
  { label: "Export", icon: "download" },
  { separator: true },
  { label: "Delete", icon: "trash", danger: true },
];

// Menu opens on click (panel is conditionally rendered). For a static preview we
// programmatically click the trigger on mount so the open panel renders.
export const Open = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const trigger = ref.current?.querySelector(".aw-menu__trigger") as HTMLElement | null;
    trigger?.click();
  }, []);
  return (
    <div ref={ref} style={{ minHeight: 280, paddingBottom: 24 }}>
      <Menu
        align="start"
        trigger={
          <Button variant="outline" trailingIcon={<Icon name="chevron-down" size={14} />}>
            Actions
          </Button>
        }
        items={ITEMS}
      />
    </div>
  );
};
