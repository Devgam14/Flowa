/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        goodly: ["Goodly", "sans-serif"],
      },
      colors: {
        primary: "#51DE80", // Deep green (Flowa main)
        secondary: "#1B211C", // Soft lime (Flowa accent)
        bag: "#1a1f16",
        dark: "#000000",
        accent: "#e3f2da", // For contrast text or footer
      },
    },
  },
  plugins: [],
};
