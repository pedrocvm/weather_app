module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/mock.ts(x)?',
    '!src/styles/**/*.ts',
    '!src/types/**/*.ts',
    '!src/services/**/*.ts',
    '!src/pages/**/*.ts(x)?',
    '!src/hooks/**/*.tsx',
    '!src/context/**/*.tsx',
    '!src/components/structure/Content/*.ts(x)?',
    '!src/components/ui/Autocomplete/*.ts(x)?',
    '!src/App.tsx',
    '!src/index.tsx',
    '!src/react-app-env.d.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '^styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
  },
  testMatch: ['<rootDir>/src/**/test.tsx']
};
