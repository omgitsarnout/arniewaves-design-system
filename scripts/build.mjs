import esbuild from "esbuild";

const serve = process.argv.includes("--serve");

/** @type {import('esbuild').BuildOptions} */
const opts = {
  entryPoints: [
    "src/demo/main.jsx",
    // CSS as entry points so the watcher rebuilds them too. esbuild leaves
    // remote @import (Google Fonts) external by default.
    "src/styles/tokens.css",
    "src/styles/components.css",
    "src/demo/demo.css",
  ],
  bundle: true,
  outdir: "public",
  entryNames: "[name]",
  format: "esm",
  jsx: "automatic",
  loader: { ".js": "jsx" },
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
