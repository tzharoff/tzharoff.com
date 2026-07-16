/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cinzel", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        game: ["Nunito", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        obsidian: "#070b13",
        deep: "#0b1220",
        panel: "#101827",
        tealglow: "#42f2dd",
        oldgold: "#d8b46a",
        tignavy: "#0b153f",
        tigframe: "#14245e",
        tigblue: "#2143b0",
        tigred: "#e03a41",
        tigcream: "#f8faff",
        tigink: "#1a2360",
        tigsky: "#aabdf2",
      },
    },
  },
  plugins: [],
};
