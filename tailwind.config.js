/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'black-white-grad': 'linear-gradient(180deg, #ffffff, #f9fafb)',
      },
      colors:{
        primary:{
          "100": "#F2D7FF",
          "200": "#E8B2FF",
          "300": "#CA94E7",
          "400": "#AB77CF",
          "500": "#8D59B7",
          "600": "#7851A9",
          "700": "#6E3B9E",
          "800": "#501E86",
          "900": "#31006E",
        },
        successgreen: "#198754",
      }
    },
  },
  plugins: [],
}

