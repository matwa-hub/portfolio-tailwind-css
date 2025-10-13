/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    container: {
        center: true,
        padding: '16px',
    },
    extend: {
        screen: {
            '2xl': '1320px',
        },
    },
  },
  plugins: [],
}