/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Croissant One", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        extraSm: "480px",
      },
    },
  },
  plugins: [],
};
