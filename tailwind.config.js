/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      play: ["Playfair Display", "serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        special: "#0073FF",
        head: "#00D4FF",
        "sub-head": "#333333",
        details: "#888888",
        cardBG: "#E3F3FF"
      },
    },
  },
  plugins: [],
};
