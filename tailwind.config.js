/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        extraSm: "280px",
        customMid: "1120px",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        26: "repeat(26, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-25": "span 25 / span 25",
      },
      colors: {
        "custom-black": "#181D31",
        "custom-blue": "#001233;",
        "custom-red": "#ca4137",
        "custom-gold": "#FFD700",
      },
    },
  },
  plugins: [],
};
