import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import pluginJest from 'eslint-plugin-jest';

const eslintConfigJest = {
  // update this to match your test files
  files: ['**/*.spec.js', '**/*.test.js'],
  plugins: { jest: pluginJest },
  languageOptions: {
    globals: pluginJest.environments.globals.globals,
  },
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
};

export default defineConfig([
  { ignores: ['dist/*', 'node_modules/*', 'media/*'] },
  { files: ['**/*.{js,mjs,cjs}'] },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: globals.node },
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  eslintConfigPrettier,
  eslintConfigJest,
]);
