import { useState } from "react";
import { Select } from "@omgitsarnout/arniewaves-design-system";

const SAMPLE_RATES = [
  { value: "44100", label: "44.1 kHz" },
  { value: "48000", label: "48 kHz" },
  { value: "96000", label: "96 kHz" },
  { value: "192000", label: "192 kHz", description: "Mastering / archival" },
];

const FORMAT_OPTIONS = [
  { value: "vst3", label: "VST3", description: "Steinberg plugin format" },
  { value: "au", label: "Audio Unit", description: "macOS / Logic" },
  { value: "aax", label: "AAX", description: "Pro Tools" },
  { value: "clap", label: "CLAP", description: "Open plugin standard" },
  { value: "standalone", label: "Standalone app" },
  { value: "ladspa", label: "LADSPA", description: "Linux (legacy)", disabled: true },
];

export const Single = () => {
  const [rate, setRate] = useState("48000");
  return (
    <div style={{ maxWidth: 360 }}>
      <Select
        label="Sample rate"
        options={SAMPLE_RATES}
        value={rate}
        onChange={setRate}
        clearable
        fullWidth
      />
    </div>
  );
};

export const MultiSelect = () => {
  const [formats, setFormats] = useState(["vst3", "au"]);
  return (
    <div style={{ maxWidth: 360 }}>
      <Select
        label="Supported formats"
        options={FORMAT_OPTIONS}
        value={formats}
        onChange={setFormats}
        multiple
        placeholder="Pick formats…"
        hint="Type to filter. Click to toggle."
        fullWidth
      />
    </div>
  );
};

export const Error = () => (
  <div style={{ maxWidth: 360 }}>
    <Select
      label="Sample rate"
      options={SAMPLE_RATES}
      value=""
      placeholder="Select…"
      error="Pick a sample rate to continue."
      fullWidth
    />
  </div>
);

export const Disabled = () => (
  <div style={{ maxWidth: 360 }}>
    <Select
      label="Sample rate"
      options={SAMPLE_RATES}
      value="44100"
      disabled
      fullWidth
    />
  </div>
);
