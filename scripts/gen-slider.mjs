// Generates placeholder gallery images. Replace public/slider/*.svg with your
// own work later (or edit the `slides` array in src/components/Gallery.astro).
import { writeFile, mkdir } from "node:fs/promises";

const pairs = [
  ["#6366f1", "#a855f7"],
  ["#ec4899", "#f97316"],
  ["#06b6d4", "#3b82f6"],
  ["#10b981", "#84cc16"],
  ["#f59e0b", "#ef4444"],
  ["#8b5cf6", "#ec4899"],
];

await mkdir("public/slider", { recursive: true });

for (let i = 0; i < pairs.length; i++) {
  const [a, b] = pairs[i];
  const n = String(i + 1).padStart(2, "0");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs>
  <rect width="1200" height="900" fill="url(#g)"/>
  <text x="64" y="150" font-family="Helvetica,Arial,sans-serif" font-size="44" font-weight="700" fill="rgba(255,255,255,0.92)">${n}</text>
  <text x="600" y="466" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-size="66" font-weight="800" fill="rgba(255,255,255,0.96)">Design work ${i + 1}</text>
  <text x="600" y="536" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-size="30" fill="rgba(255,255,255,0.78)">Replace with your own image</text>
</svg>`;
  await writeFile(`public/slider/${n}.svg`, svg);
}

console.log(`Generated ${pairs.length} placeholder slides in public/slider/`);
