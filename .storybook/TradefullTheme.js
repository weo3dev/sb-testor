import { create } from "@storybook/theming";

export default create({
  base: "light",

  colorPrimary: "#ffffff",
  colorSecondary: "#5ab9ae",

  // UI
  appBg: "#eef8f6",
  appContentBg: "#ffffff",
  appBorderColor: "#d9d9d9",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "#232323",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "#232323",
  barSelectedColor: "#5AB9AE",
  barBg: "#ffffff",

  // Form colors
  inputBg: "#ffffff",
  inputBorder: "silver",
  inputTextColor: "#232323",
  inputBorderRadius: 4,

  brandTitle: "Tradefull Relish",
  brandUrl: "./",
  brandImage: "../src/assets/relish-logo.svg",
  brandTarget: "_self",
});
