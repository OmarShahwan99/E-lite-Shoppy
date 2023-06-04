/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#2fdab8",
      secondary: {
        100: "#ffb900",
        200: "#e71f30",
        300: "#fc636b",
      },
      dark: "#312a2a",
      light: "#fff",
      gray: "#ddd",
      para: "#777",
      facebook: "#1773ea",
      instagram: "#C13584",
      twitter: "#289cea",
      linkedin: "#1b74af",
      error: {
        100: "red",
        200: "#e38787",
      },
      transparent: "transparent",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      center: true,
    },
    extend: {
      backgroundImage: {
        offer: "url('/src/assets/slide-3.jpg')",
      },
    },
  },
  plugins: [],
};
