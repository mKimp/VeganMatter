module.exports = {
  plugins: ["prettier"],
  extends: ["airbnb", "react-app", "prettier"],
  rules: {
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto",
      },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
};
