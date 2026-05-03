/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cinzel", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        obsidian: "#070b13",
        deep: "#0b1220",
        panel: "#101827",
        tealglow: "#42f2dd",
        oldgold: "#d8b46a",
      },
    },
  },
  plugins: [],
};
