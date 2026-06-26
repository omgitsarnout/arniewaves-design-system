import { Progress } from "@omgitsarnout/arniewaves-design-system";

export const Bars = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 460 }}>
    <Progress label="Uploading preset pack" value={68} showValue />
    <Progress label="Rendering" indeterminate />
  </div>
);

export const Determinate = () => (
  <div style={{ maxWidth: 460 }}>
    <Progress label="Uploading preset pack" value={68} showValue />
  </div>
);
