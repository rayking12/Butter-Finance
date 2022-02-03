const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
// eslint-disable-next-line no-unused-vars
const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        white: "#fff",
        blueGray: colors.blueGray,
        coolgray: colors.coolGray,
        gray: colors.gray,
        truegray: colors.trueGray,
        warmgray: colors.warmGray,
        red: "#FF0000",
        orange: "#293845",
        amber: "#B7BEC4",
        yellow: colors.yellow,
        lime: colors.lime,
        green: "#008000",
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        lightblue: colors.lightBlue,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
      },
      brightness: {
        25: ".25",
        50: ".5",
        175: "1.75",
      },
      contrast: {
        25: ".25",
        50: ".50",
      },
      backgroundColor: {
        primary: "#DD66C4",
        secondary: "#F1F5F8",
        success: "#40189D",
        king: "#191970",
        faq: "#0A335C",
        vault: "#293845",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
