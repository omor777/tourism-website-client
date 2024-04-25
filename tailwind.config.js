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
        primary: {
          main: "#3b82f6",
          dark: "#1d4ed8",
          light: "#93c5fd",
          extraLight: "#bfdbfe",
        },
        secondary: {
          main: "#a855f7",
          dark: "#7e22ce",
          light: "#d8b4fe",
        },
      },
      container: {
        center: true,
      },
      fontFamily: {
        raleway: ["'Raleway', sans-serif"],
        rancho: ["'Rancho', cursive"],
      },
      backgroundImage:{
        formBg:
        "url('https://i.ibb.co/R2ytr9K/signup.png')",
      }
    },
  },
  plugins: [require("daisyui")],
};
