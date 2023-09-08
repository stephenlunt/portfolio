import { defineCollection, z } from "astro:content"

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    created: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updated: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional()
  })
})

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    created: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    major: z.boolean().optional()
  })
})

export const collections = { blog: blog, projects: projects }
