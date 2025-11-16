/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "system-ui", "sans-serif"]
      },
      colors: {
        brand: {
          50: "#f3f1ff",
          100: "#e6e3ff",
          200: "#ccc7ff",
          300: "#b3abff",
          400: "#998fff",
          500: "#8073ff",
          600: "#665ccc",
          700: "#4d4599",
          800: "#332e66",
          900: "#1a1733"
        }
      }
    }
  },
  plugins: []
};
