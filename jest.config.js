module.exports = {
  preset: 'ts-jest',
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  rootDir: '.',
  testEnvironment: 'jsdom',
  coverageDirectory: './coverage',
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/build/', '/packages/'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  testRegex: '(.|-)test\\.(js|ts|tsx|jsx)$'
};
