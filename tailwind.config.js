module.exports = {
  content: ["*"],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-70%)" },

          "100%": { transform: "translateX(0%)" },
        },
        visIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "slide-in": "slideIn 1s ",
        "visible-in": "visIn 1.5s",
      },
    },
  },
  plugins: [],
};
