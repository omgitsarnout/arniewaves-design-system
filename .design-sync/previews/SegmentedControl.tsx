import { useState } from "react";
import { SegmentedControl } from "@omgitsarnout/arniewaves-design-system";

export const Billing = () => {
  const [billing, setBilling] = useState("annual");
  return (
    <SegmentedControl
      options={[
        { value: "monthly", label: "Monthly" },
        { value: "annual", label: "Annual", badge: "Save 20%" },
      ]}
      value={billing}
      onChange={setBilling}
    />
  );
};

export const StringOptions = () => {
  const [view, setView] = useState("Specs");
  return (
    <SegmentedControl
      options={["Specs", "Pricing", "Changelog"]}
      value={view}
      onChange={setView}
    />
  );
};

export const Sizes = () => {
  const [sm, setSm] = useState("vst3");
  const [md, setMd] = useState("vst3");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
      <SegmentedControl
        size="sm"
        options={["vst3", "au", "aax"]}
        value={sm}
        onChange={setSm}
      />
      <SegmentedControl
        size="md"
        options={["vst3", "au", "aax"]}
        value={md}
        onChange={setMd}
      />
    </div>
  );
};
