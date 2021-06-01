/* eslint-env node */
const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'prettier',
    'eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint', 'import'],
  settings: {
    'import/resolver': {
      webpack: { config: path.join(__dirname, 'webpack.config.js') },
    },
  },
  rules: {
    'import/extensions': ['.js', '.json', '.ts', '.vue'],
  },
};
