/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1270px",
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
        "slider-1":
          "linear-gradient(to bottom right, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://i.ibb.co/QQY541r/alejandro-cartagena-B64-B6-k-AWlw-unsplash.jpg')",
        "slider-2":
          "linear-gradient(to bottom right, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://i.ibb.co/0J407bG/colin-watts-M1-Obxvs-WVh-Y-unsplash.jpg')",
        "slider-3":
          "linear-gradient(to bottom right, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://i.ibb.co/BftzTD0/ice-tea-n-Gj-A-Pbu-Uv4-unsplash.jpg')",
      },
      boxShadow: {
        card: "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;",
        "card-2": " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        nav: " rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
      },
    },
  },
  plugins: [require("daisyui")],
};
