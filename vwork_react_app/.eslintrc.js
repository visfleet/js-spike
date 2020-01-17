module.exports = {
  extends: [
    "react-app",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    // Opt-out because we are using hash router
    "jsx-a11y/anchor-is-valid": "off",
    // Enforce import order
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          "builtin",
          "external",
          "internal",
          "unknown",
          "parent",
          "sibling",
          "index",
        ],
      },
    ],
    // Enforce prop-types
    "react/prop-types": ["error", {}],
    "react/no-unused-prop-types": ["error"],
  },
  settings: {
    "import/resolver": {
      "babel-module": {
        root: ["./src"],
      },
    },
  },
};
