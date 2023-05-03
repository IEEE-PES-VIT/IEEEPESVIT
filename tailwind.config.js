module.exports = {
  content: ["*"],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-70%)", opacity: ".3" },

          "100%": { transform: "translateX(0%)", opacity: "1" },
        },
        visIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: ".3" },

          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
      },
      animation: {
        "slide-in": "slideIn 1s ",
        "visible-in": "visIn 1.5s",
        "slide-down": "slideDown 1s",
      },
    },
  },
  plugins: [],
};
