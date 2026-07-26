// Library build: emits a distributable package into dist/.
//   dist/index.js       — ESM bundle of the public API (React kept external)
//   dist/arniewaves.css — tokens + component styles, concatenated
//   dist/fonts/         — self-hosted woff2 + their licences
import esbuild from "esbuild";
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist", { recursive: true });

await esbuild.build({
  entryPoints: ["src/index.js"],
  bundle: true,
  outfile: "dist/index.js",
  format: "esm",
  jsx: "automatic",
  loader: { ".js": "jsx" },
  // React is a peer dependency — never bundle it.
  external: ["react", "react-dom", "react/jsx-runtime"],
  sourcemap: true,
  target: ["es2020"],
  logLevel: "info",
});

// tokens.css first so its @font-face rules and :root vars precede the
// component rules that reference them.
const css =
  readFileSync("src/styles/tokens.css", "utf8") +
  "\n" +
  readFileSync("src/styles/components.css", "utf8");
writeFileSync("dist/arniewaves.css", css);

// The @font-face src paths are relative to the stylesheet ("./fonts/x.woff2").
// They live at src/styles/fonts/ so that ONE literal path resolves correctly
// both from the source (esbuild, demo build) and from the emitted
// dist/arniewaves.css — hence copying them next to it here. Consumers' bundlers
// resolve and fingerprint them from that location.
cpSync("src/styles/fonts", "dist/fonts", { recursive: true });

console.log("Built dist/index.js + dist/arniewaves.css + dist/fonts/");
