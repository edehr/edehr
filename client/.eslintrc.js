module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': 'off',
    semi: ['warn', 'never'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: ['warn', 'single'],
    'no-unused-vars': ['warn', { args: 'none' }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
