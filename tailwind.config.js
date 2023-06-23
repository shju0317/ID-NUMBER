module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        gray1: "#e1e1e1",
        gray2: "#c4c4c4",
        gray3: "#a6a6a6",
        gray4: "#898989",
        gray5: "#6b6b6b",
        gray6: "#565656",
        gray7: "#404040",
        gray8: "#2b2b2b",
        gray9: "#151515",
        primary: "#c4c4c4", //gray2
        secondary: "#a6a6a6", //gray3
        body: "#2b2b2b", //gray8
        accent: "#e93945",
        darkAccent: "#e93945"
      },
      maxWidth: {
        full: "1920px"
      }
    },
  },
  plugins: [],
}