import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The most honest status page line an AI agent writes while every server is
// down: plain status page voice, consistent "we", specific about what is
// broken, honest about what it does not know — no invented cause, no fake ETA,
// and a concrete next-update commitment instead of a joke.
const LINE =
  "Investigating: All of our servers are down. We don't know why yet and won't guess at an ETA. Next update in 30 minutes, whether or not we know more.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/tmp/mgwals-out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${LINE.length} chars, ${Buffer.byteLength(LINE, "utf8")} bytes, gate 1-160)`);
