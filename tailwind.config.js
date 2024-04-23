/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**/*.{ts,html}"],
  theme: {
    extend: {
      screens: {
        xl: "1368px",
      },
      fontFamily: {
        NotoSans: "Noto Sans",
      },
    },
  },
  plugins: [],
};
