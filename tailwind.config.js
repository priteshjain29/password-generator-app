/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "jetbrains-mono": ['JetBrains Mono', 'monospace']
      },
      colors: {
        "hole-black": "#18171F",
        "proper-white": "#E6E5EA",
        "beige-blue": "#817D92",
        "beige-black": "#24232C",
        "green": "#A4FFAF",
        "tomato": "#F64A4A",
        "orange": "#FB7C58",
        "yellow": "#F8CD65"
      }
    },
  },
  plugins: [],
}

