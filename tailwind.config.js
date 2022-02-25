module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      lora: "'Lora', serif",
      roboto: "'Roboto', sans-serif",
    },
    theme: {
      backgroundSize: {
        "110%": "110%",
      },
    },
  },
  plugins: [],
};
