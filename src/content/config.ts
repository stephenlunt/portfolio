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
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      heroImage: image()
        .refine((img) => img.width >= 1080, {
          message: "Hero image must be at least 1080 pixels wide!"
        })
        .optional(),
      heroAlt: z.string().optional(),
      created: z
        .string()
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
      featured: z.boolean().optional()
    })
})

export const collections = { blog: blog, projects: projects }
