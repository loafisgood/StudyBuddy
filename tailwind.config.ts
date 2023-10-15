module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors : {
        light: {
          primary: "#FFFFFF",
          secondary: "#F5F5F5",
        },
        dark: {
          primary: "#232425",
          secondary: "#1F1F1F",
        }
      },
    },
  },
  plugins: [],
}