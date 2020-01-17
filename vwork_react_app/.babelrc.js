module.exports = {
  presets: ["babel-preset-react-app"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
      },
    ],
  ],
};
