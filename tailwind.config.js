module.exports = {
  purge: {
    enabled: true,
    content: [
      "./backend/templates/*.pug",
      "./backend/templates/**/*.pug",
      "./public/scripts/*.js"
    ]
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
