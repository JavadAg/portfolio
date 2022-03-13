module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      xs: { max: "480px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      sm: { min: "481px", max: "768px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      md: { min: "769px", max: "990px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      lg: { min: "991px", max: "1366px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      xl: { min: "1367px" }
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        banner: [" Comfortaa, system-ui, sans-serif"]
      },
      colors: {
        1: "#F7F7F7",
        2: "#e0c3fc",
        3: "#466671 50%",
        4: "#8ec5fc",
        white50: "#fff 50%",
        black50: "#000 50%",
        223541: "#223541 50%"
      },
      boxShadow: {
        customleft: "11px 16px #fff",
        customright: "-11px 16px #fff"
      },
      inset: {
        "18px": "18px"
      },
      height: {
        nesf: "0.5em"
      },
      width: {
        110: "130%"
      },
      transitionTimingFunction: {
        custom1: "cubic-bezier(0.65, 0, 0.076, 1)"
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "400%": "400%",
        "400%%": "400% 400%",
        "300%": "300%",
        "200%": "200%",
        "100%": "100%",
        "150%": "150%",
        16: "4rem"
      },
      backgroundPosition: {
        "-100%": "100%",
        "50%": "50%",
        "0%": "0%"
      },
      keyframes: {
        rubberband1: {
          "0%": {
            transform: "scale3d(1, 1 , 1)"
          },

          "30%": {
            transform: "scale3d(1.25, 0.75 , 1)"
          },

          "40%": {
            transform: "scale3d(0.75, 1.25,  1)"
          },

          "50%": {
            transform: "scale3d(1.15, 0.85, 1)"
          },

          "65%": {
            transform: "scale3d(0.95, 1.05, 1)"
          },

          "75%": {
            transform: "scale3d(1.05, 0.95, 1)"
          },

          "100%": {
            transform: "scale3d(1, 1 , 1)"
          }
        },
        opacityS: {
          "0%": {
            opacity: "0"
          },
          "25%": {
            opacity: "25%"
          },
          "50%": {
            opacity: "50%"
          },
          "75%": {
            opacity: "75%"
          },
          "100%": {
            opacity: "100%"
          }
        },
        opacitySI: {
          "0%": {
            opacity: "100%"
          },
          "25%": {
            opacity: "75%"
          },
          "50%": {
            opacity: "50%"
          },
          "75%": {
            opacity: "25%"
          },
          "100%": {
            opacity: "0"
          }
        },
        gradient: {
          "0%": {
            backgroundPosition: "0% bg-50%"
          },
          "50%": {
            backgroundPosition: "100% 50%"
          },
          "100%": {
            backgroundPosition: "0% 50%"
          }
        }
      },
      animation: {
        rubberband: "rubberband1 0.8s both 1",
        opacityscroll: "opacityS 0.5s both 1 ",
        opacityscrollinvis: "opacitySI 0.5s both 1 ",
        banner: "gradient 10s ease-in-out  infinite "
      }
    }
  },
  plugins: []
}
