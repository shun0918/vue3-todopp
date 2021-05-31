module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-recommended', '@vue/typescript', 'airbnb-base', 'prettier', 'eslint-config-prettier'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  settings: {
    'import/resolver': { config: path.join(__dirname, 'webpack.config.js') },
  },
};
