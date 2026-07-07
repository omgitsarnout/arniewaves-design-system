import { Tabs } from "@omgitsarnout/arniewaves-design-system";

export const ProductTabs = () => (
  <div style={{ maxWidth: 520 }}>
    <Tabs defaultValue="specs">
      <Tabs.List>
        <Tabs.Tab value="specs">Specs</Tabs.Tab>
        <Tabs.Tab value="pricing">Pricing</Tabs.Tab>
        <Tabs.Tab value="changelog">Changelog</Tabs.Tab>
        <Tabs.Tab value="soon" disabled>
          Soon
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="specs">
        <p style={{ margin: 0 }}>
          VST3 · AU · AAX · CLAP. 44.1–192 kHz. Sub-3 ms round trip on a local
          network. Mac (Universal) + Windows.
        </p>
      </Tabs.Panel>
      <Tabs.Panel value="pricing">
        <p style={{ margin: 0 }}>
          Hobby $19 · Pro $39 · Studio $89. Free updates within a major version.
          Arnie hates subscriptions, so there isn't one.
        </p>
      </Tabs.Panel>
      <Tabs.Panel value="changelog">
        <p style={{ margin: 0 }}>
          v1.3 — lower jitter on flaky Wi-Fi. v1.2 — CLAP support. v1.1 — Windows
          ASIO fixes.
        </p>
      </Tabs.Panel>
    </Tabs>
  </div>
);

export const PricingTab = () => (
  <div style={{ maxWidth: 520 }}>
    <Tabs defaultValue="pricing">
      <Tabs.List>
        <Tabs.Tab value="specs">Specs</Tabs.Tab>
        <Tabs.Tab value="pricing">Pricing</Tabs.Tab>
        <Tabs.Tab value="changelog">Changelog</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="specs">
        <p style={{ margin: 0 }}>
          VST3 · AU · AAX · CLAP. 44.1–192 kHz. Sub-3 ms round trip.
        </p>
      </Tabs.Panel>
      <Tabs.Panel value="pricing">
        <p style={{ margin: 0 }}>
          Hobby $19 · Pro $39 · Studio $89. Free updates within a major version.
          Arnie hates subscriptions, so there isn't one.
        </p>
      </Tabs.Panel>
      <Tabs.Panel value="changelog">
        <p style={{ margin: 0 }}>
          v1.3 — lower jitter on flaky Wi-Fi. v1.2 — CLAP support.
        </p>
      </Tabs.Panel>
    </Tabs>
  </div>
);
