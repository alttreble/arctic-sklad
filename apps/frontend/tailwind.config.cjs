module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
  ],
  plugins: [
    require("./src/lib/plugin.cjs")
  ]
};
