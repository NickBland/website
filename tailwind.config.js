module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#6D327C',
          200: '#4954AA',
          300: '#0074CB',
          400: '#0092D8',
          500: '#00ABD0',
          600: '#00C2B5',
        },
        light: {
          100: '#F924F1',
          200: '#FF11B1',
          300: '#FF6079',
          400: '#FF9D53',
          500: '#FFCF4C',
          600: '#F9F871',
        },
      },
      display: ['dark'],
      backgroundImage: {
        'splashDark': "url('/splashDarkFinal.jpg')",
        'splashLight': "url('/splashLightFinal.jpg')",
      },
    },
  },
  plugins: [],
}
