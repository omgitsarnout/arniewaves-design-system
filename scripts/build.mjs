import esbuild from "esbuild";

const serve = process.argv.includes("--serve");

/** @type {import('esbuild').BuildOptions} */
const opts = {
  entryPoints: [
    "src/demo/main.jsx",
    // CSS as entry points so the watcher rebuilds them too.
    "src/styles/tokens.css",
    "src/styles/components.css",
    "src/demo/demo.css",
  ],
  bundle: true,
  outdir: "public",
  entryNames: "[name]",
  format: "esm",
  jsx: "automatic",
  // tokens.css @font-face now points at local woff2 files; without a loader for
  // them esbuild fails the CSS bundle outright. "file" emits them into
  // public/fonts/ and rewrites the url() to match.
  loader: { ".js": "jsx", ".woff2": "file" },
  assetNames: "fonts/[name]-[hash]",
  sourcemap: true,
  logLevel: "info",
};

if (serve) {
  const ctx = await esbuild.context(opts);
  await ctx.watch();
  const { port } = await ctx.serve({ servedir: "public", port: 5173 });
  console.log(`\n  ArnieWaves design system → http://localhost:${port}\n`);
} else {
  await esbuild.build(opts);
  console.log("Built to public/");
}
