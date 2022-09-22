import tradefullTheme from "./TradefullTheme";

// or global addParameters
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: tradefullTheme,
  },
  options: {
    storySort: {
      order: [
        "Introduction",
        "Getting Started",
        "Foundation",
        "Components",
        "Example",
      ],
    },
  },
};
