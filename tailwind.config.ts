import type { Config } from "tailwindcss"

const defaultTheme = require("tailwindcss/defaultTheme")

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette")

const svgToDataUri = require("mini-svg-data-uri")

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      xs: "512px",
      ...defaultTheme.screens,
    },
  },
  plugins: [
    function ({ matchUtilities, theme }: { matchUtilities: any; theme: any }) {
      matchUtilities(
        {
          "bg-grid": (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        },
      )
    },
  ],
} satisfies Config
