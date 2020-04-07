module.exports = {
  parser: 'babel-eslint',
  env: { browser: true, es6: true },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'pretter'],
  parserOptions: {
    ecmaFeatures: { experimentalObjectRestSpread: true, jsx: true },
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-uses-vars': 2,
    'no-console': 1,
    'no-use-before-define': 0,
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-use-before-define': 0,
  },
}
