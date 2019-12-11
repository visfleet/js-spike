module.exports = {
  extends: ["react-app", "plugin:import/recommended"],
  rules: {
    "jsx-a11y/anchor-is-valid": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "always"
      }
    ]
  }
};
