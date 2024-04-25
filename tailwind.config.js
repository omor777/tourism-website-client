/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1220px",
    },
    extend: {
      colors: {
        Primary: "#378CE7",
      },
      fontFamily: {
        raleway: ["'Raleway', sans-serif"],
        rancho: ["'Rancho', cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};
