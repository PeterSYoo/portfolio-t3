/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      serif: ["Times New Romans"],
      inter: ["var(--font-inter)"],
    },
  },
  plugins: [],
};

module.exports = config;
