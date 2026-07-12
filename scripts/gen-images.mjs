// Rasterizes the source SVGs in assets/ into the PNGs the site references.
// Run with: node scripts/gen-images.mjs
import sharp from "sharp";
import { readFile } from "node:fs/promises";

const og = await readFile(new URL("../assets/og.svg", import.meta.url));
await sharp(og).png().toFile("public/og.png");

const icon = await readFile(new URL("../assets/icon.svg", import.meta.url));
await sharp(icon).resize(180, 180).png().toFile("public/apple-touch-icon.png");
await sharp(icon).resize(512, 512).png().toFile("public/icon-512.png");

console.log("Generated public/og.png, apple-touch-icon.png, icon-512.png");
