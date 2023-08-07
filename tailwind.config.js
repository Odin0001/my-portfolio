/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nightBlack': 'rgb(3, 0, 28)', //night mode
        'nightPurple': 'rgb(48, 30, 103)', //night mode
        'nightBlue': 'rgb(91, 143, 185)', //night mode
        'nightLightBlue': 'rgb(182, 234, 218)', //night mode

        'sunsetOrange': 'rgb(253, 132, 31)', //sunset mode
        'sunsetDarkOrange': 'rgb(225, 77, 42)', //sunset mode
        'sunsetPink': 'rgb(205, 16, 77)', //sunset mode
        'sunsetPurple': 'rgb(156, 44, 119)', //sunset mode

        'morningBeige': 'rgb(248, 237, 227)', //morning mode
        'morningGray': 'rgb(223, 211, 195)', //morning mode
        'morningDarkBeige': 'rgb(208, 184, 168)', //morning mode
        'morningPurple': 'rgb(125, 110, 131)', //morning mode

        'noonDarkOrange': 'rgb(226, 106, 44)', //noon mode
        'noonOrange': 'rgb(255, 130, 67)', //noon mode
        'noonLightOrange': 'rgb(253, 166, 93)', //noon mode
        'noonBeige': 'rgb(255, 208, 127)' //noon mode
      }
    },
  },
  plugins: [],
}

