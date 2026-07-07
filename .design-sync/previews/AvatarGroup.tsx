import { Avatar, AvatarGroup } from "@omgitsarnout/arniewaves-design-system";

export const Collaborators = () => (
  <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
    <AvatarGroup max={4}>
      <Avatar name="Mara Olsen" />
      <Avatar name="Devon Reyes" />
      <Avatar name="Sam Cole" />
      <Avatar name="Iris Vy" />
      <Avatar name="Theo Lux" />
      <Avatar name="Nina Park" />
    </AvatarGroup>
  </div>
);
