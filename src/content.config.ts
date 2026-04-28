import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(60),
      description: z.string().min(90).max(155),
      created: z.coerce.date(),
      updated: z.coerce.date().optional(),
      tags: z.array(z.string()).optional(),
      heroImage: z.object({
        url: image(),
        alt: z.string(),
      }),
    }),
});

export const collections = { blog };
