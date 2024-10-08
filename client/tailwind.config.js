/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/**/*.css"],
  theme: {
    extend: {
      colors: {
        base: "#ffffff",
        blackPrimary: "#212121",
        highlight: "#FF7300",
        grayPrimary: "#A1A1A1",
        graySecondary: "#e3e3e3",
        grayLight: "#f1f1f1",
      },
      borderRadius: {
        "custom-1": "10px",
      },
      boxShadow: {
        customMediumToBottom: "0px 7px 20px 0px rgba(0, 0, 0, 0.15)",
        customMediumToTop: "7px 0px 20px 0px rgba(0, 0, 0, 0.15)",
      },
      lineClamp: {
        8: "8",
        10: "10"
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
