import { defineCollection, z } from "astro:content"

const blog = defineCollection({
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
})

const projects = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string().max(60),
      description: z.string().min(90).max(155),
      created: z.coerce.date().or(z.literal("Ongoing")),
      featured: z.boolean().default(false),
      tags: z.array(z.string()).optional(),
      heroImage: z.object({
        url: image(),
        alt: z.string(),
      }),
    }),
})

export const collections = { blog: blog, projects: projects }
