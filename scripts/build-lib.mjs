// Library build: emits a distributable package into dist/.
//   dist/index.js      — ESM bundle of the public API (React kept external)
//   dist/arniewaves.css — tokens + component styles, concatenated
import esbuild from "esbuild";
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";

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

// tokens.css first so its @import (Google Fonts) and :root vars precede the
// component rules — CSS @import must come before other statements.
const css =
  readFileSync("src/styles/tokens.css", "utf8") +
  "\n" +
  readFileSync("src/styles/components.css", "utf8");
writeFileSync("dist/arniewaves.css", css);

console.log("Built dist/index.js + dist/arniewaves.css");
