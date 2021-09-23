module.exports = {
  preset: 'jest-playwright-preset',
  setupFilesAfterEnv: ['expect-playwright'],
  testMatch: ['<rootDir>/tests/integration/**/*.spec.(js)']
};