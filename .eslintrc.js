module.exports = {
  extends: ["airbnb-typescript-prettier"],
  rules: {
    // just say "no" to default exports!
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
  },
};
