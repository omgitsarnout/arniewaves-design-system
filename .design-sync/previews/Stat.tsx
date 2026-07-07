import { Stat } from "@omgitsarnout/arniewaves-design-system";

export const Metrics = () => (
  <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
    <Stat icon="bolt" value="2.4 ms" label="Median round-trip latency" />
    <Stat icon="users" value="12,480" label="Active studios" delta="+8%" trend="up" />
    <Stat icon="star" value="4.9" label="Average rating" />
    <Stat icon="globe" value="63" label="Countries" delta="+5" trend="up" />
  </div>
);
