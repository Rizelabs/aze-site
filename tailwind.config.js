/** @type {import('tailwindcss').Config} */
export default {
  purge: {
    content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0C0A10'
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    // ...
  ],
}