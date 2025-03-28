/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#ff194b",
        yellow: "#ffde20",
        green: "#13ff6d",
        blue: "#3ea8ff",
        purple: "#bd6dff",
        primary: "#06f7e7",
        "primary-transparent": "rgba(0, 255, 255, 0.08)",
        black: "#040404",
        white: "#f5f5f5",
        "dark-1": "#080914",
        "dark-2": "#101225",
        "dark-3": "#171a33",
        "dark-4": "#24284d",
        "dark-transparent": "rgba(8, 9, 20, 0.49)",
        "light-1": "#8a8e9e",
        "light-2": "#b7bbcc",
        "light-3": "#c0c0c0",
        "light-4": "#d0d0d0",
        "light-5": "#e0e0e0",
        "light-transparent": "rgba(255, 255, 255, 0.23)",
      },
      fontFamily: {
        code: ["Roboto Mono", "monospace"],
        main: ["Roboto", "sans-serif"],
      },
      backdropBlur: {
        nav: "3px",
      },
    },
  },
  plugins: [],
};
