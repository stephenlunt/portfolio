import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, passthroughImageService } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";

export default defineConfig({
  site: "https://stephen-lunt.dev",
  integrations: [sitemap(), react(), mdx()],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      // https://github.com/withastro/astro/issues/7629
      noExternal: ["react-icons"],
    },
  },
  image: {
    service: passthroughImageService(),
  },
  output: "static",
  adapter: cloudflare({
    imageService: "passthrough",
  }),
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
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
});
