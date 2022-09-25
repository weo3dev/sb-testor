module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|ts)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    "@storybook/addon-toolbars",
    "storybook-css-modules",
  ],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
};
