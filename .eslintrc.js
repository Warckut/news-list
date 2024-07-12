module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:@web-bee-ru/react'],
  overrides: [],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'prettier', 'unicorn'],
  settings: {
    'react': {
      version: 'detect',
    },
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
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true,
      },
    ],
  },
};
