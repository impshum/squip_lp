/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        xs: "420px",
      },
      container: {
        center: true,
      },
      fontFamily: {
        display: ["Tinos", "serif"],
        body: ["Inter", "sans-serif"],
        sfpro: ["'SF Pro'", "sans-serif"],
      },
      colors: {
        red: {
          1000: "#410B13",
          1100: "#FF5658",
        },
        dark: {
          500: "#270006",
        },
      },
    },
  },
  plugins: [],
};
