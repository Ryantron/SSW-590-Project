export default {
  moduleFileExtensions: ['js', 'json'],
  moduleDirectories: ['node_modules', 'src'],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jsdom',
};
