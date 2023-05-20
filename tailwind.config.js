/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: [
    {
      colors: {
        "primary": "#31C48D",

        "secondary": "#AC68F7",

        "accent": "#41789F",

        "neutral": "#1E1929",

        "base-100": "#233876",

        "info": "#82D8F7",

        "success": "#00BA88",

        "warning": "#F4C91A",

        "error": "#B82418",
      },
    },
  ],
  plugins: [
    require('flowbite/plugin')
  ]
}

