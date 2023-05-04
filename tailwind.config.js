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
    borderRadius: {
      'cus': '100%',
    }
  },
  plugins: [require("daisyui")],
}

