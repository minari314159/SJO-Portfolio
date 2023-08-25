/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        s: "425px",
        md: "768px ",
        lg: "1024px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
