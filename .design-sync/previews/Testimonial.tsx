import { Testimonial } from "@omgitsarnout/arniewaves-design-system";

export const Reviews = () => (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(240px, 1fr))", gap: 16 }}>
    <Testimonial
      rating={5}
      quote="“Replaced a rack of hardware with this. The latency genuinely shocked me.”"
      name="Mara Olsen"
      role="Producer, Tidewater"
    />
    <Testimonial
      rating={5}
      quote="“Sounds like the wire isn't even there. Arnie's onto something.”"
      name="Devon Reyes"
      role="FOH Engineer"
    />
  </div>
);

export const Single = () => (
  <div style={{ maxWidth: 360 }}>
    <Testimonial
      rating={5}
      quote="“Replaced a rack of hardware with this. The latency genuinely shocked me.”"
      name="Mara Olsen"
      role="Producer, Tidewater"
    />
  </div>
);
