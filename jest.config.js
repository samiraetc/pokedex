module.exports = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|gif|woff|woff2)$": "identity-obj-proxy",
  },
  coveragePathIgnorePatterns: ['node_modules'],
  modulePathIgnorePatterns: ["<rootDir>/src/App.tsx", "<rootDir>/src/main.tsx" ]
}