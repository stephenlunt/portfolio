import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"
import rehypeExternalLinks from "rehype-external-links"

export default defineConfig({
  site: "https://stephen-lunt.dev",
  integrations: [
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    mdx(),
  ],
  vite: {
    ssr: {
      // https://github.com/withastro/astro/issues/7629
      noExternal: ["react-icons"],
    },
  },
  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: { type: "text", value: " 🔗" },
          target: "_blank",
          rel: ["noopener", "noreferrer"],
        },
      ],
    ],
  },
})
