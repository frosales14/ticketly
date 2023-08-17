/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "auth-bg": "url('/assets/img/auth/authbg.webp')",
      },
    },
    colors: {
      blue: {
        light: "#00A0DE",
        dark: "#0060A0",
        navy: "#002050",
      },
      white: {
        normal: "#FFFFFF",
        break: "#FAFAFA",
      },
      gray: {
        light: "#CCCCCC",
      },
      green: {
        light: "#00FF00",
        dark: "#205c40",
        mint: "#B2FF67",
      },
      transparent: "transparent",
    },
    fontFamily: {
      sans: "Montserrat, sans-serif",
    },
  },
  plugins: [],
};
