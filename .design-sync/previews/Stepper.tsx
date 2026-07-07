import { useState } from "react";
import { Stepper } from "@omgitsarnout/arniewaves-design-system";

export const Quantity = () => {
  const [qty, setQty] = useState(1);
  return <Stepper value={qty} onChange={setQty} min={1} max={10} />;
};

export const SmallQuantity = () => {
  const [qty, setQty] = useState(2);
  return <Stepper value={qty} onChange={setQty} min={1} max={10} size="sm" />;
};

export const Licenses = () => {
  const [seats, setSeats] = useState(3);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span className="aw-field__label">License seats</span>
      <Stepper value={seats} onChange={setSeats} min={1} max={5} label="License seats" />
    </div>
  );
};
