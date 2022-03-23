module.exports = {
  // parser: false,
  plugins: [
    require("tailwindcss")(require.resolve("./tailwind.config.js")),
    require("autoprefixer"),
  ],
};
