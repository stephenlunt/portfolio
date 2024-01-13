import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

export default defineConfig({
  site: "https://stephen-lunt.dev",
  integrations: [
    sitemap(),
    tailwind({
      applyBaseStyles: false
    }),
    react(),
    mdx()
  ],
  vite: {
    ssr: {
      // https://github.com/withastro/astro/issues/7629
      noExternal: ["react-icons"]
    }
  },
  redirects: {
    "/projects/scrabble-checker/": "/projects/word-checker/"
  }
})
