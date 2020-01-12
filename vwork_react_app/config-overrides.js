const {
  //
  override,
  useBabelRc,
  disableEsLint,
} = require("customize-cra");

module.exports = override(
  // disable eslint in webpack
  disableEsLint(),
  useBabelRc(),
);
