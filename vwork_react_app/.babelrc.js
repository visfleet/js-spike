module.exports = {
  presets: ["babel-preset-react-app"],
  plugins: [
    [
      "babel-plugin-root-import",
      {
        paths: [
          {
            rootPathSuffix: "./src",
            rootPathPrefix: "~/",
          },
        ],
      },
    ],
  ],
};
