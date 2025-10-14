/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        goodly: ["Goodly", "sans-serif"],
      },
      colors: {
        primary: "#40531A", // Deep green (Flowa main)
        secondary: "#C7D59F", // Soft lime (Flowa accent)
        dark: "#000000", // For contrast text or footer
      },
    },
  },
  plugins: [],
};
