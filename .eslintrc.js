module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    // 不允许使用var
    // "no-var": "error",
    // 不能有额外的分号
    "no-extra-semi": "error",
    // 空格默认为2个
    "@typescript-eslint/indent": ["error", 2]
  },
  // ts支持es6的模块化
  parserOptions: {
    ecmaVersion: 6,
    sourceType: module,
    modules: true
  }
};
