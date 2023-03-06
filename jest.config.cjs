module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    setupFilesAfterEnv: ['./src/setupTests.ts'],
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/node_modules/**'],
    coverageThreshold: {
      global: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
      },
    },
    moduleDirectories: ['node_modules', 'src'],
  };
  