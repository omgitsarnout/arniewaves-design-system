import { Waveform } from "@omgitsarnout/arniewaves-design-system";

export const Thumb = () => (
  <div className="aw-product__thumb" style={{ height: 120, maxWidth: 320 }}>
    <Waveform seed={9} bars={40} />
  </div>
);

export const Variations = () => (
  <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
    <div className="aw-product__thumb" style={{ height: 120, width: 300 }}>
      <Waveform seed={3} bars={48} />
    </div>
    <div className="aw-product__thumb" style={{ height: 120, width: 300 }}>
      <Waveform seed={11} bars={32} />
    </div>
  </div>
);
