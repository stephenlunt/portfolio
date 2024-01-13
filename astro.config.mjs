import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"
import mdx from "@astrojs/mdx"

// https://astro.build/config
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
  // https://github.com/withastro/astro/issues/7629
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
})
