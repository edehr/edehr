module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['<rootDir>/src/**/*.spec.js'],
  testURL: 'http://localhost/',
  collectCoverage: false,
  collectCoverageFrom: [
    '**/src/**/*.{js,vue}',
    '**/tests/**/*.{js,vue}',
    '!**/*.eslintrc.js',
    '!**/*.config.js',
    '!**/dist/**',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/src/tests/**',
    '!**/tests/**',
    '!**/src/store/test/**',
    '!**/src/helpers/test/**',
    '!**/src/inside/views/**'
  ]
}
