import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    role: z.string(),
    year: z.number(),
    domain: z.string(), // e.g. "FinTech", "MedTech"
    summary: z.string(),
    cover: z.string().optional(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };
