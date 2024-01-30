import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 10px 10px -10px rgba(72, 84, 159, 0.10)",
        "4xl": "0px 10px 10px -5px rgba(72, 84, 159, 0.10)",
        "5xl": "0px 10px 20px 0px rgba(72, 84, 159, 0.25);",
      },
      fontFamily: {
        sans: ['"League Spartan"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#7C5DFA",
        "primary-lighter": "#9277FF",
        danger: "#EC5757",
        "danger-lighter": "#9277FF",
        neutral: {
          3: "#1E2139",
          4: "#252945",
          5: "#DFE3FA",
          6: "#888EB0",
          7: "#7E88C3",
          8: "#0C0E16",
          11: "#F8F8FB",
          12: "#141625",
        },
        current: "currentColor",
      },
    },
  },
  plugins: [],
};
