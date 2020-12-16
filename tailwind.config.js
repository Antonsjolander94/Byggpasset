module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["futura-pt", "system-ui"],
      serif: ["futura-pt", "system-ui"],
    },
    extend: {
      gridTemplateColumns: {
        navbar: "repeat(3, 100px)",
      },
    },
  },
  variants: {},
  plugins: [],
};
