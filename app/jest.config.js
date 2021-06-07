module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: [
    // 'tests/**/?(*.)+(spec|test).+(ts|tsx|js)',
    // "**/__tests__/**/*.+(ts|tsx|js)",
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
  },
};
