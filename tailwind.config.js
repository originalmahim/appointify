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
        primary: "#00BCD4",
        primaryHover: "#ff6200",
        special: "#5E4E77",
        active: "#7EDA4A",
        "light-gray": "#9E9E9E",
        lightBlue:"#F0F4F9",
        head: "#4977b4",
        "sub-head": "#333333",
        details: "#888888",
        cardBG: "#E3F3FF",
        "light-bg": "#F5F5F5",
        dark: "#12121299",
      },
      backgroundImage: {
        "gradient-special": "linear-gradient(to right, #5E4E77, #7C6C96)",
        "gradient-blue": "linear-gradient(to right, #3A6FB3, #4FA3D1)",
      },
    },
    fontFamily:{
      body:["Poppins"]
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
});
