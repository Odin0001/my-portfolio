/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(255, 255, 255, 0.8) 3px, transparent 5px, rgba(0, 0, 0, 0.5) 80px)',
        circularLightLg: 'repeating-radial-gradient(rgba(255, 255, 255, 0.8) 3px, transparent 5px, rgba(0, 0, 0, 0.5) 60px)',
        circularLightMd: 'repeating-radial-gradient(rgba(255, 255, 255, 0.8) 3px, transparent 5px, rgba(0, 0, 0, 0.5) 40px)',
        circularLightSm: 'repeating-radial-gradient(rgba(255, 255, 255, 0.8) 3px, transparent 5px, rgba(0, 0, 0, 0.5) 20px)',
      }
    },
    screens: {
      '2xl': {max: '1530px'},
      'xl': {max: '1279px'},
      'lg': {max: '1023px'},
      'md': {max: '767px'},
      'sm': {max: '639px'},
      'xs': {max: '479px'},
    }
  },
  plugins: [],
}
