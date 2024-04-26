/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
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
      backgroundImage: {
        formBg: "url('https://i.ibb.co/R2ytr9K/signup.png')",
        loginBg:
          "url('https://i.ibb.co/G0SfWvr/undraw-Access-account-re-8spm.png')",
      },
      boxShadow: {
        card: "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;",
      },
    },
  },
  plugins: [require("daisyui")],
};
