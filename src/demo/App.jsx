import { useEffect, useState } from "react";
import {
  Accordion,
  Alert,
  AudioPlayer,
  Avatar,
  AvatarGroup,
  Badge,
  Breadcrumbs,
  Button,
  Card,
  Checkbox,
  CTABanner,
  DescriptionList,
  Drawer,
  EmptyState,
  FeatureMatrix,
  Hero,
  Icon,
  ICON_NAMES,
  Knob,
  LevelMeter,
  Menu,
  Modal,
  Pagination,
  PricingCard,
  ProductCard,
  Progress,
  Radio,
  SectionLabel,
  SegmentedControl,
  Select,
  Slider,
  Spinner,
  Stat,
  Stepper,
  Table,
  Tabs,
  Testimonial,
  TextField,
  Textarea,
  Toggle,
  Tooltip,
  useToast,
  Waveform,
} from "../index.js";

// Shared pricing data, driven by the billing-period toggle.
const PRICING = {
  monthly: { period: "/mo", basic: "$8", pro: "$20" },
  annual: { period: "/mo, billed yearly", basic: "$6", pro: "$16" },
};

const MATRIX_GROUPS = [
  {
    label: "Streaming",
    features: [
      {
        label: "Simultaneous streams",
        values: { free: "2", basic: "10", pro: "Unlimited" },
      },
      {
        label: "Audio quality",
        values: { free: "128 kbps", basic: "320 kbps", pro: "Lossless" },
      },
      {
        label: "Sample rate",
        values: { free: "44.1 kHz", basic: "48 kHz", pro: "192 kHz" },
      },
      {
        label: "Internet relay",
        values: { free: false, basic: true, pro: true },
      },
      {
        label: "Relay failover",
        values: { free: false, basic: false, pro: true },
      },
    ],
  },
  {
    label: "Workflow & support",
    features: [
      {
        label: "Priority routing",
        values: { free: false, basic: false, pro: true },
      },
      {
        label: "Multi-machine license",
        values: { free: false, basic: false, pro: true },
      },
      {
        label: "Email support",
        values: { free: false, basic: true, pro: true },
      },
      {
        label: "Priority chat support",
        values: { free: false, basic: false, pro: true },
      },
    ],
  },
];

const FORMAT_OPTIONS = [
  { value: "vst3", label: "VST3", description: "Steinberg plugin format" },
  { value: "au", label: "Audio Unit", description: "macOS / Logic" },
  { value: "aax", label: "AAX", description: "Pro Tools" },
  { value: "clap", label: "CLAP", description: "Open plugin standard" },
  { value: "standalone", label: "Standalone app" },
  {
    value: "ladspa",
    label: "LADSPA",
    description: "Linux (legacy)",
    disabled: true,
  },
];

const SAMPLE_RATES = [
  { value: "44100", label: "44.1 kHz" },
  { value: "48000", label: "48 kHz" },
  { value: "96000", label: "96 kHz" },
  { value: "192000", label: "192 kHz", description: "Mastering / archival" },
];

function Section({ label, title, children }) {
  return (
    <section>
      <SectionLabel>{label}</SectionLabel>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function App() {
  const [theme, setTheme] = useState("light");
  const [rate, setRate] = useState("48000");
  const [formats, setFormats] = useState(["vst3", "au"]);
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [tier, setTier] = useState("pro");
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [gain, setGain] = useState(70);
  const [mix, setMix] = useState(35);
  const [qty, setQty] = useState(1);
  const [pageNum, setPageNum] = useState(3);
  const toast = useToast();
  const [billing, setBilling] = useState("monthly");
  const p = PRICING[billing];
  const matrixTiers = [
    {
      key: "free",
      name: "Free",
      price: "$0",
      period: p.period,
      cta: "Get started",
    },
    {
      key: "basic",
      name: "Basic",
      price: p.basic,
      period: p.period,
      cta: "Choose Basic",
    },
    {
      key: "pro",
      name: "Pro",
      price: p.pro,
      period: p.period,
      featured: true,
      badge: "Popular",
      cta: "Go Pro",
    },
  ];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const emailError =
    email.length > 0 && !email.includes("@")
      ? "That doesn't look like an email."
      : "";

  return (
    <div className="demo">
      <div className="demo__top">
        <div>
          <h1 className="demo__brand">ArnieWaves</h1>
          <p className="demo__tag">
            Small tools, fair prices, great sound. The component library —
            marker-pen headings, monospace everything, warm earthy tones.
          </p>
        </div>
        <div className="demo__theme">
          <Toggle
            label={theme === "dark" ? "Dark" : "Light"}
            checked={theme === "dark"}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
        </div>
      </div>

      <Section label="Actions" title="Buttons">
        <div className="demo__row">
          <Button variant="primary">Add to cart</Button>
          <Button variant="outline">Learn more</Button>
          <Button variant="ghost">Cancel</Button>
          <Button variant="primary" loading>
            Processing
          </Button>
          <Button variant="primary" disabled>
            Sold out
          </Button>
        </div>
        <div className="demo__row" style={{ marginTop: 16 }}>
          <Button variant="primary" size="sm">
            Small
          </Button>
          <Button variant="primary" size="md">
            Medium
          </Button>
          <Button variant="primary" size="lg">
            Large
          </Button>
          <Button
            variant="outline"
            leadingIcon={<Icon name="download" size={15} />}
          >
            Download
          </Button>
          <Button
            variant="primary"
            leadingIcon={<Icon name="play" size={14} />}
          >
            Preview
          </Button>
        </div>
      </Section>

      <Section label="Labels" title="Badges & pills">
        <div className="demo__row">
          <Badge variant="orange">$39</Badge>
          <Badge variant="orange" dot>
            New
          </Badge>
          <Badge variant="sand">VST3</Badge>
          <Badge variant="sand">Low latency</Badge>
          <Badge variant="outline">Beta</Badge>
          <Badge variant="sand" onRemove={() => {}}>
            Removable
          </Badge>
        </div>
      </Section>

      <Section label="Iconography" title="Icons">
        <div className="demo__icons">
          {ICON_NAMES.map((n) => (
            <div className="demo__icon" key={n} title={n}>
              <Icon name={n} />
              <span className="demo__icon-name">{n}</span>
            </div>
          ))}
        </div>
        <p className="demo__note">
          Stroke-based, drawn on a 24×24 grid, colored by{" "}
          <code>currentColor</code>. Use{" "}
          <code>&lt;Icon name="…" size={20} /&gt;</code>. {ICON_NAMES.length}{" "}
          icons.
        </p>
      </Section>

      <Section label="Forms" title="Text fields">
        <div className="demo__stack">
          <TextField
            label="License email"
            placeholder="you@studio.com"
            hint="Where we'll send your download + license key."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
            fullWidth
          />
          <TextField
            label="Coupon"
            placeholder="ARNIE10"
            leading={<span>%</span>}
            fullWidth
          />
          <TextField
            label="Search presets"
            placeholder="Tape, plate, spring…"
            trailing={<span>⌕</span>}
            fullWidth
          />
          <Textarea
            label="Notes for the maker"
            placeholder="Tell Arnie what you're building…"
            hint="Optional. Arnie reads every one."
            fullWidth
          />
        </div>
      </Section>

      <Section label="Forms" title="Dropdowns with search">
        <div className="demo__stack">
          <Select
            label="Sample rate"
            options={SAMPLE_RATES}
            value={rate}
            onChange={setRate}
            clearable
            fullWidth
          />
          <Select
            label="Supported formats (multi-select)"
            options={FORMAT_OPTIONS}
            value={formats}
            onChange={setFormats}
            multiple
            placeholder="Pick formats…"
            hint="Type to filter. Click to toggle. One option is intentionally disabled."
            fullWidth
          />
        </div>
        <p className="demo__note">
          Keyboard: ↑/↓ to move, Enter to select, Esc to close. Search filters
          labels + descriptions.
        </p>
      </Section>

      <Section label="Forms" title="Selection controls">
        <div
          className="demo__row"
          style={{ gap: 40, alignItems: "flex-start" }}
        >
          <div className="demo__stack">
            <Checkbox
              label="Email me about updates"
              description="A few times a year, no spam."
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <Checkbox label="Include source presets" defaultChecked />
            <Checkbox label="Unavailable option" disabled />
          </div>
          <div className="demo__stack">
            <Radio
              name="tier"
              label="Hobby — $19"
              checked={tier === "hobby"}
              onChange={() => setTier("hobby")}
            />
            <Radio
              name="tier"
              label="Pro — $39"
              checked={tier === "pro"}
              onChange={() => setTier("pro")}
            />
            <Radio
              name="tier"
              label="Studio — $89"
              checked={tier === "studio"}
              onChange={() => setTier("studio")}
            />
          </div>
          <div className="demo__stack">
            <Toggle label="Low-latency mode" defaultChecked />
            <Toggle label="High-fidelity encode" description="Uses more CPU." />
            <Toggle label="Disabled" disabled />
          </div>
        </div>
      </Section>

      <Section label="Surfaces" title="Cards">
        <Card style={{ maxWidth: 460 }}>
          <SectionLabel>What's in the box</SectionLabel>
          <h2 style={{ margin: "8px 0 10px" }}>AudioTeleporter</h2>
          <p
            style={{
              fontSize: 13,
              lineHeight: 1.7,
              color: "var(--aw-muted)",
              margin: 0,
            }}
          >
            Send audio anywhere with low latency and high fidelity. Pairs with
            everything in the rack. A generic surface built from the same tokens
            as everything else.
          </p>
          <div className="demo__row" style={{ marginTop: 18 }}>
            <Button variant="primary">Buy — $39</Button>
            <Button variant="ghost">Try the demo</Button>
          </div>
        </Card>
      </Section>

      <Section label="Composite" title="Product cards">
        <div className="demo__cards">
          <ProductCard
            name="AudioTeleporter"
            price="$39"
            seed={3}
            description="Send audio anywhere. Low latency, high fidelity, zero faff."
            formats={["VST3", "AU", "AAX", "Mac", "Windows"]}
            cta="Add to cart"
          />
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
      </Section>

      <Section label="Overlays" title="Modal">
        <div className="demo__row">
          <Button variant="primary" onClick={() => setModalOpen(true)}>
            Open license dialog
          </Button>
        </div>
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Activate AudioTeleporter"
          footer={
            <>
              <Button variant="ghost" onClick={() => setModalOpen(false)}>
                Not now
              </Button>
              <Button variant="primary" onClick={() => setModalOpen(false)}>
                Activate
              </Button>
            </>
          }
        >
          <p style={{ marginTop: 0 }}>
            Paste the license key from your order email. One key activates up to
            three machines — handy for a laptop rig and the studio desktop.
          </p>
          <TextField
            label="License key"
            placeholder="AWAVE-XXXX-XXXX-XXXX"
            fullWidth
          />
          <p style={{ marginBottom: 0 }}>
            Esc closes this, focus is trapped inside, and the background scroll
            is locked — the usual dialog niceties.
          </p>
        </Modal>
      </Section>

      <Section label="Navigation" title="Tabs">
        <Card style={{ maxWidth: 520 }}>
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
                VST3 · AU · AAX · CLAP. 44.1–192 kHz. Sub-3 ms round trip on a
                local network. Mac (Universal) + Windows.
              </p>
            </Tabs.Panel>
            <Tabs.Panel value="pricing">
              <p style={{ margin: 0 }}>
                Hobby $19 · Pro $39 · Studio $89. Free updates within a major
                version. Arnie hates subscriptions, so there isn't one.
              </p>
            </Tabs.Panel>
            <Tabs.Panel value="changelog">
              <p style={{ margin: 0 }}>
                v1.3 — lower jitter on flaky Wi-Fi. v1.2 — CLAP support. v1.1 —
                Windows ASIO fixes.
              </p>
            </Tabs.Panel>
          </Tabs>
        </Card>
        <p className="demo__note">
          Keyboard: ←/→ to move between tabs, Home/End to jump.
        </p>
      </Section>

      <Section label="Overlays" title="Tooltips">
        <div className="demo__row" style={{ gap: 28 }}>
          <Tooltip label="Sends to any peer on your network">
            <Button variant="outline">Hover me</Button>
          </Tooltip>
          <Tooltip label="Below." placement="bottom">
            <Button variant="ghost">Bottom</Button>
          </Tooltip>
          <Tooltip label="To the left" placement="left">
            <Badge variant="sand">Left</Badge>
          </Tooltip>
          <Tooltip label="Also shows on keyboard focus" placement="right">
            <Button variant="ghost">Right</Button>
          </Tooltip>
        </div>
        <p className="demo__note">
          Shows on hover and on keyboard focus — try tabbing to them.
        </p>
      </Section>

      <Section label="Commerce" title="Tier comparison">
        <div className="demo__billing">
          <SegmentedControl
            options={[
              { value: "monthly", label: "Monthly" },
              { value: "annual", label: "Annual", badge: "Save 20%" },
            ]}
            value={billing}
            onChange={setBilling}
          />
        </div>
        <div className="aw-tiers">
          <PricingCard
            name="Free"
            price="$0"
            period={p.period}
            description="Kick the tires. Perfect for trying AudioTeleporter at home."
            cta="Get started"
            features={[
              "2 simultaneous streams",
              "128 kbps audio",
              "Local network only",
              { label: "Lossless audio", included: false },
              { label: "Priority routing", included: false },
              { label: "Email support", included: false },
            ]}
          />
          <PricingCard
            name="Basic"
            price={p.basic}
            period={p.period}
            description="For the hobbyist with a small rig and a few collaborators."
            cta="Choose Basic"
            features={[
              "10 simultaneous streams",
              "320 kbps audio",
              "Internet relay",
              { label: "Lossless audio", included: false },
              "Email support",
              { label: "Priority routing", included: false },
            ]}
          />
          <PricingCard
            name="Pro"
            price={p.pro}
            period={p.period}
            featured
            badge="Most popular"
            description="Everything, uncompressed, for the working studio."
            cta="Go Pro"
            features={[
              { label: "Unlimited streams" },
              { label: "Lossless / 24-bit", note: "up to 192 kHz" },
              "Internet relay + failover",
              "Priority routing",
              "Priority email + chat support",
              "Multi-machine license",
            ]}
          />
        </div>
      </Section>

      <Section label="Commerce" title="Feature matrix">
        <FeatureMatrix tiers={matrixTiers} groups={MATRIX_GROUPS} />
        <p className="demo__note">
          Shares the billing toggle above — switch it and the header prices
          update. On mobile the grid scrolls sideways with the feature column
          pinned.
        </p>
      </Section>

      <Section label="Data" title="Table (responsive)">
        <Table
          caption="Plugin catalog"
          columns={[
            { key: "name", header: "Plugin" },
            { key: "price", header: "Price", align: "right" },
            { key: "formats", header: "Formats" },
            {
              key: "status",
              header: "Status",
              render: (row) => (
                <Badge
                  variant={row.status === "Shipping" ? "orange" : "sand"}
                  dot
                >
                  {row.status}
                </Badge>
              ),
            },
            {
              key: "action",
              header: "",
              align: "right",
              render: () => (
                <Button variant="ghost" size="sm">
                  Details
                </Button>
              ),
            },
          ]}
          data={[
            {
              id: 1,
              name: "AudioTeleporter",
              price: "$39",
              formats: "VST3 · AU · AAX",
              status: "Shipping",
            },
            {
              id: 2,
              name: "TapeWarmer",
              price: "$24",
              formats: "VST3 · AU",
              status: "Shipping",
            },
            {
              id: 3,
              name: "SpringVerb",
              price: "$19",
              formats: "VST3 · AU · CLAP",
              status: "Shipping",
            },
            {
              id: 4,
              name: "GrainCloud",
              price: "—",
              formats: "VST3",
              status: "Beta",
            },
          ]}
        />
        <p className="demo__note">
          Resize the preview narrow (≤ 620px): each row reflows into a labeled
          card — the column headers become inline labels, no horizontal scroll.
        </p>
      </Section>

      <Section label="Audio" title="Audio player">
        <AudioPlayer
          title="AudioTeleporter — demo loop"
          artist="ArnieWaves"
          duration={184}
          seed={4}
        />
        <p className="demo__note">
          Click the waveform to seek; the play button simulates transport.
        </p>
      </Section>

      <Section label="Audio" title="Knobs, sliders & meters">
        <div className="demo__row" style={{ gap: 40, alignItems: "flex-end" }}>
          <Knob
            label="Gain"
            value={gain}
            onChange={setGain}
            valueLabel={(v) => `${v}%`}
          />
          <Knob
            label="Mix"
            value={mix}
            onChange={setMix}
            valueLabel={(v) => `${v}%`}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              alignItems: "center",
            }}
          >
            <LevelMeter animated channels={2} />
            <span className="aw-knob__label">Output</span>
          </div>
        </div>
        <div className="demo__stack" style={{ marginTop: 24 }}>
          <Slider
            label="Input gain"
            value={gain}
            onChange={setGain}
            valueLabel={(v) => `${v} dB`}
            fullWidth
          />
          <Slider
            label="Dry / wet"
            value={mix}
            onChange={setMix}
            valueLabel={(v) => `${v}%`}
            fullWidth
          />
        </div>
        <p className="demo__note">
          Drag the knobs (or arrow-key them); knobs and sliders share state
          here.
        </p>
      </Section>

      <Section label="Marketing" title="Hero">
        <Card
          padded={false}
          style={{ padding: "8px 24px", overflow: "hidden" }}
        >
          <Hero
            eyebrow="New · v1.3"
            title="Send audio anywhere."
            subtitle="Low latency, high fidelity, zero faff. The teleporter your rack has been missing — now with relay failover."
            actions={
              <>
                <Button
                  variant="primary"
                  leadingIcon={<Icon name="download" size={15} />}
                >
                  Get AudioTeleporter
                </Button>
                <Button
                  variant="outline"
                  leadingIcon={<Icon name="play" size={14} />}
                >
                  Hear it
                </Button>
              </>
            }
            media={
              <div className="aw-product__thumb" style={{ height: 150 }}>
                <Waveform seed={9} bars={40} />
              </div>
            }
          />
        </Card>
      </Section>

      <Section label="Marketing" title="FAQ accordion">
        <Accordion defaultValue="latency">
          <Accordion.Item
            value="latency"
            title="How low is the latency, really?"
          >
            Sub-3 ms round trip on a local network, and typically under 30 ms
            over a decent internet connection with relay enabled.
          </Accordion.Item>
          <Accordion.Item
            value="formats"
            title="Which plugin formats are supported?"
          >
            VST3, Audio Unit, AAX, and CLAP on both macOS (Universal) and
            Windows.
          </Accordion.Item>
          <Accordion.Item
            value="license"
            title="How many machines can I use one license on?"
          >
            Up to three — handy for a laptop rig and a studio desktop. The Pro
            tier adds a multi-machine license for bigger setups.
          </Accordion.Item>
          <Accordion.Item value="refund" title="What's the refund policy?">
            14 days, no questions asked. Arnie would rather you were happy than
            stuck.
          </Accordion.Item>
        </Accordion>
      </Section>

      <Section label="Marketing" title="Testimonials & stats">
        <div className="demo__grid">
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
        <div className="demo__row" style={{ gap: 16, marginTop: 18 }}>
          <AvatarGroup max={4}>
            <Avatar name="Mara Olsen" />
            <Avatar name="Devon Reyes" />
            <Avatar name="Sam Cole" />
            <Avatar name="Iris Vy" />
            <Avatar name="Theo Lux" />
            <Avatar name="Nina Park" />
          </AvatarGroup>
          <span className="demo__note" style={{ margin: 0 }}>
            Loved by 12,000+ makers
          </span>
        </div>
        <div className="demo__grid" style={{ marginTop: 18 }}>
          <Stat icon="bolt" value="2.4 ms" label="Median round-trip latency" />
          <Stat
            icon="users"
            value="12,480"
            label="Active studios"
            delta="+8%"
            trend="up"
          />
          <Stat icon="star" value="4.9" label="Average rating" />
          <Stat
            icon="globe"
            value="63"
            label="Countries"
            delta="+5"
            trend="up"
          />
        </div>
      </Section>

      <Section label="Marketing" title="CTA banner">
        <CTABanner
          tone="surface"
          title="Ready to teleport?"
          description="Try the full version free for 14 days. No card required."
        >
          <Button variant="primary">Start free trial</Button>
          <Button variant="ghost">Talk to Arnie</Button>
        </CTABanner>
      </Section>

      <Section label="Feedback" title="Toasts & alerts">
        <div className="demo__row">
          <Button
            variant="primary"
            onClick={() =>
              toast({
                variant: "success",
                title: "Added to cart",
                message: "AudioTeleporter — $39",
              })
            }
          >
            Success toast
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast({
                variant: "info",
                title: "Heads up",
                message: "Your license email is on the way.",
              })
            }
          >
            Info toast
          </Button>
          <Button
            variant="ghost"
            onClick={() =>
              toast({
                variant: "danger",
                title: "Payment failed",
                message: "Card was declined.",
                action: { label: "Retry" },
              })
            }
          >
            Error toast
          </Button>
        </div>
        <div
          className="demo__stack"
          style={{ maxWidth: 520, marginTop: 18, gap: 12 }}
        >
          <Alert variant="success" title="License activated">
            You're all set on this machine.
          </Alert>
          <Alert variant="warning" title="Trial ending soon">
            3 days left — upgrade to keep your presets.
          </Alert>
          <Alert variant="danger" title="Connection lost" onClose={() => {}}>
            The relay dropped. Reconnecting…
          </Alert>
          <Alert variant="info">A new version (v1.3) is available.</Alert>
        </div>
      </Section>

      <Section label="Feedback" title="Progress, spinners & empty states">
        <div className="demo__stack" style={{ maxWidth: 460 }}>
          <Progress label="Uploading preset pack" value={mix} showValue />
          <Progress label="Rendering" indeterminate />
        </div>
        <div
          className="demo__row"
          style={{ gap: 18, marginTop: 18, alignItems: "center" }}
        >
          <Spinner size={18} />
          <Spinner size={26} />
          <Button variant="primary" loading>
            Working
          </Button>
        </div>
        <Card style={{ maxWidth: 460, marginTop: 18 }} padded={false}>
          <EmptyState
            icon="shopping-cart"
            title="Your cart is empty"
            description="Browse the catalog and add a tool or two — Arnie's waiting."
            action={
              <Button variant="primary" size="sm">
                Browse plugins
              </Button>
            }
          />
        </Card>
      </Section>

      <Section label="Commerce" title="Cart drawer, steppers & menus">
        <div className="demo__row" style={{ gap: 20, alignItems: "center" }}>
          <Button
            variant="primary"
            leadingIcon={<Icon name="shopping-cart" size={15} />}
            onClick={() => setDrawerOpen(true)}
          >
            Open cart
          </Button>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span className="aw-field__label">Quantity</span>
            <Stepper value={qty} onChange={setQty} min={1} max={10} />
          </div>
          <Menu
            align="start"
            trigger={
              <Button
                variant="outline"
                trailingIcon={<Icon name="chevron-down" size={14} />}
              >
                Actions
              </Button>
            }
            items={[
              { label: "Share preset", icon: "share" },
              { label: "Duplicate", icon: "copy", shortcut: "⌘D" },
              { label: "Export", icon: "download" },
              { separator: true },
              { label: "Delete", icon: "trash", danger: true },
            ]}
          />
        </div>
        <Drawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          side="right"
          title="Your cart"
          footer={
            <Button
              variant="primary"
              fullWidth
              onClick={() => {
                setDrawerOpen(false);
                toast({
                  variant: "success",
                  title: "Order placed",
                  message: "Check your email for downloads.",
                });
              }}
            >
              Checkout · ${39 * qty}
            </Button>
          }
        >
          <div
            className="demo__row"
            style={{ justifyContent: "space-between", color: "var(--aw-text)" }}
          >
            <span style={{ fontWeight: 700 }}>AudioTeleporter</span>
            <Stepper value={qty} onChange={setQty} min={1} max={10} size="sm" />
          </div>
          <p style={{ marginTop: 16 }}>
            Subtotal: ${39 * qty}.00 — shipping is free (it's a download, after
            all).
          </p>
        </Drawer>
      </Section>

      <Section label="Commerce" title="Specs, breadcrumbs & pagination">
        <Breadcrumbs
          items={[
            { label: "Home", href: "#" },
            { label: "Plugins", href: "#" },
            { label: "AudioTeleporter" },
          ]}
        />
        <div style={{ maxWidth: 460, marginTop: 16 }}>
          <DescriptionList
            items={[
              { term: "Formats", description: "VST3 · AU · AAX · CLAP" },
              { term: "Platforms", description: "macOS (Universal) · Windows" },
              { term: "Sample rate", description: "44.1–192 kHz" },
              { term: "Latency", description: "Sub-3 ms (local network)" },
              { term: "License", description: "3 machines, lifetime updates" },
            ]}
          />
        </div>
        <div style={{ marginTop: 18 }}>
          <Pagination page={pageNum} total={12} onChange={setPageNum} />
        </div>
      </Section>

      <hr className="demo__divider" />
      <p className="demo__note" style={{ marginTop: 24 }}>
        ArnieWaves design system · run <code>/design-sync ArnieWaves</code> to
        push to Claude Design.
      </p>
    </div>
  );
}
