/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkestViolet: "#200e30",
        darkViolet: "#34183b",
        simidarkViolet: "#462261",
        middarkViolet: "#5b2d84",
        lightestViolet: "#bf73f3",
        lightViolet: "#a758df",
        midlightViolet: "#884ab6",
        similightViolet: "#daa5fa",
        subColor_1: "#74647c",
        subColor_2: "#9f7db2",
        subColor_3: "#040404",
        subColor_4: "rgb(220, 38, 38)",
        productLighBG: "rgb(254, 202, 202)",
        productDarkBG: "rgb(191, 219 ,254)",
        darkBasicBackground: "#252525",
      },
      fontFamily: {
        basic: "REM, sans-serif",
        handWrite: "Fuzzy Bubbles, sans-serif",
      },
      keyframes: {
        darkgradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        lightgradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        darkgradient: "darkgradient 20s ease-in-out infinite",
        lightgradient: "lightgradient 60s ease-in-out infinite",
      },
      backgroundImage: {
        dark: "url('/images/4.jpg')",
        light: "url('/images/3.jpg')",
        "gradient-r-to-l":
          "linear-gradient(90deg, transparent,#200e30, grey, #5b2d84,transparent)",
        "gradientt-r-to-l":
          "linear-gradient(90deg, transparent,#bf73f3, white, #daa5fa,transparent)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
