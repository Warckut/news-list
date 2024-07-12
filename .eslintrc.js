module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:@web-bee-ru/react'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['~', './src/'],
          ['@', './src/'],
        ],
        extensions: ['.ts', '.js', '.tsx'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {},
};
