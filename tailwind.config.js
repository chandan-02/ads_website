module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '841': '52.5625rem',
        '456':'28.5rem',
        '552':'34.5rem',
        '878':'54.875rem',
        '350':'30rem'
      },
      height: {
        '546': '34.125rem',
        '259':'16.1875rem',
        '548': '36.125rem',
        '561':'35.0625rem',
      },
      colors: {
        'regal-red': '#FF0000',
      },
    },
  },
  plugins: [],
}