module.exports = {
  root: true,
  env: {
    node: true
  },
  rules: {
    quotes: ['warn', 'single'],
    "space-before-function-paren": ["warn", "always"],
  },
  parserOptions: {
    parser: 'babel-eslint',
    "sourceType": "module"
  }
}
