const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  preset: 'ts-jest',
  globals: {},
  testEnvironment: 'jsdom',
  testRegex: '^.+\\.spec\\.ts',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.vue$": "vue-jest",
    "^.+\\js$": "babel-jest"
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node']
}
