/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}",
  ],

  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        textDark: "#222",
        backgroundMain: "#EEEEEE",
        main: "rgba(67,87,66,0.61)",
      },
      borderRadius: {
        md: "8px",
      },
      boxShadow: {
        input: "0 2px 4px rgba(0,0,0,0.1)",
      },
      spacing: {
        2.5: "10px",
        11: "44px",
      },
      fontSize: {
        base16: "16px",
      },
      fontFamily: {
        sans: ["Quicksand-Regular"], // Default font
        quicksand: ["Quicksand-Regular"],
        "quicksand-semibold": ["Quicksand-SemiBold"],
        "quicksand-bold": ["Quicksand-Bold"],
        // Add other weights as needed
      },
    },
  },
  plugins: [],
};
