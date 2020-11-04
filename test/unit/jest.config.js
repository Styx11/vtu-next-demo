const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  preset: 'ts-jest',
  globals: {},
  testEnvironment: 'jsdom',
  testRegex: '^.+\\.spec\\.js',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    'ant-design-vue/(.*)$': '<rootDir>/node_modules/ant-design-vue/$1',
    'ant-design-vue/es/(.*)$': '<rootDir>/node_modules/ant-design-vue/es/$1',
    'ant-design-vue/lib/(.*)$': '<rootDir>/node_modules/ant-design-vue/lib/$1',
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  testEnvironment: 'jest-environment-jsdom-fifteen',
  transformIgnorePatterns: [
    '/dist/',
    // Ignore modules without es / lib dir.
    // Update: @babel/runtime should also be transformed
    'node_modules/(?!.*(@babel|lodash-es))[^/]+?/(?!(es|node_modules|lib)/)',
  ],
  transform: {
    "^.+\\.(css|styl|less|sass|scss)$": "<rootDir>/node_modules/jest-css-modules-transform",
    '^.+\\.(vue|md)$': '<rootDir>/node_modules/vue-jest',
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest',
    '^.+\\.svg$': '<rootDir>/node_modules/jest-transform-stub',
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node', 'less', 'css', 'md', 'jpg'],
}
