/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Cookie: ['Cookie', 'sans-serif'],
        cursive: ['cursive']
      },
    },
  },
  plugins: [require("daisyui")],
}

