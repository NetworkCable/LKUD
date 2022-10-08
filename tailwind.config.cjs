/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'monts': "Montserrat"
      },
      colors: {
        "lkud-red": {
          primary: "#8D153A"
        },
        "lkud-yellow": {
          primary: "#FFBE29"
        }
      }
    },
  },
  plugins: [],
}
