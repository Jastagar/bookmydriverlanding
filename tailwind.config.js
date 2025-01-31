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
          "100": "#EEF8FC",
          "200": "#CBEAF6",
          "300": "#A8DBF0",
          "400": "#85CCEA",
          "500": "#62BDE4",
          "600": "#3FAFDE",
          "700": "#239DD1",
          "800": "#1E83AE",
          "900": "#18698C",
          "1000": "#124F69",
          "1100": "#0C3446",
          "1200": "#061A23",
        },
        successgreen: "#198754",
      }
    },
  },
  plugins: [],
}

