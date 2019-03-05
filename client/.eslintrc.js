module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential'],
  rules: {
    'space-before-function-paren': ['warn', 'always'],
    'no-console': 'off',
    semi: ['warn', 'never'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: ['warn', 'single'],
    'quote-props': ['error', 'as-needed'],
    indent: ['error', 2],
    'no-unused-vars': ['warn', { args: 'none' }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
