import { Avatar } from "@omgitsarnout/arniewaves-design-system";

export const Initials = () => (
  <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
    <Avatar name="Mara Olsen" />
    <Avatar name="Devon Reyes" />
    <Avatar name="Sam Cole" />
    <Avatar name="Iris Vy" />
  </div>
);

export const Sizes = () => (
  <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
    <Avatar name="Theo Lux" size={28} />
    <Avatar name="Nina Park" size={40} />
    <Avatar name="Arnie Waves" size={56} />
  </div>
);
