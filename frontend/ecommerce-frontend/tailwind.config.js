/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
     "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
     extend: {
      colors: {
        primary: "#2563eb", // modern blue
        secondary: "#1e293b", // dark slate
        accent: "#f97316", // orange for buttons
        lightGray: "#f8fafc"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: [],
}

