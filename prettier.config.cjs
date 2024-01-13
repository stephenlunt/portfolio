/** @type {import("prettier").Config} */
module.exports = {
  singleQuote: false,
  bracketSpacing: true,
  endOfLine: "lf",
  semi: false,
  tabWidth: 2,
  trailingComma: "all",
  printWidth: 80,
  pluginSearchDirs: [__dirname],
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}
