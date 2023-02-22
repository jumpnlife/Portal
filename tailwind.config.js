module.exports = {
  content: ["./components/*.tsx", "./components/**/*.tsx", "./screens/*.tsx", "./screens/**/*.tsx"],
  theme: {
    extend: {
      lineHeight: {
        '11': '2.75rem',
        '12': '3rem',
      }
    }
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
