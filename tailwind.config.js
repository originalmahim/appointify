const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      play: ["Playfair Display", "serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        special: "#5E4E77",
        head: "#4977b4",
        "sub-head": "#333333",
        details: "#888888",
        "light-bg": "#F5F5F5",
      },
      backgroundImage: {
        "gradient-special": "linear-gradient(90deg, #5E4E77 0%, #7C6C96 100%)",
        "gradient-blue": "linear-gradient(90deg, #3A6FB3 0%, #4FA3D1 100%)",
      },
    },
  },
  plugins: [require("daisyui")],
});
