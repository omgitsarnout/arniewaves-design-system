import { ProductCard } from "@omgitsarnout/arniewaves-design-system";

export const Flagship = () => (
  <div style={{ maxWidth: 300 }}>
    <ProductCard
      name="AudioTeleporter"
      price="$39"
      seed={3}
      description="Send audio anywhere. Low latency, high fidelity, zero faff."
      formats={["VST3", "AU", "AAX", "Mac", "Windows"]}
      cta="Add to cart"
    />
  </div>
);

export const Catalog = () => (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
    <ProductCard
      name="TapeWarmer"
      price="$24"
      seed={11}
      description="Saturation and wow/flutter from a deck Arnie actually owns."
      formats={["VST3", "AU", "Mac", "Windows"]}
      cta="Add to cart"
    />
    <ProductCard
      name="SpringVerb"
      price="$19"
      seed={7}
      description="A real spring tank, sampled and modeled. Boingy in the best way."
      formats={["VST3", "AU", "CLAP", "Mac", "Linux"]}
      cta="Add to cart"
    />
  </div>
);
