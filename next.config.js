const { remarkCodeHike } = require("@code-hike/mdx")
const theme = require("shiki/themes/github-dark.json")

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  mdxOptions: {
    remarkPlugins: [[remarkCodeHike, { theme }]],
  },
  unstable_flexsearch: {
    codeblocks: true,
  },
  unstable_staticImage: true,
});

module.exports = withNextra({
  redirects: () => {
    return [
      {
        source: "/docs",
        destination: "/docs/getting-started",
        statusCode: 302,
      },

    ];
  },
  reactStrictMode: true,
});
