module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    'shared-node-browser': true
  },

  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },

  plugins: ['filenames', 'security', 'eslint-comments'],

  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
    'plugin:security/recommended'
  ],

  rules: {
    'no-console': 'error',
    'comma-dangle': ['error', 'never'],
    'max-len': ['error', 120],
    'one-var': ['error', {uninitialized: 'always', initialized: 'never'}],
    'one-var-declaration-per-line': ['error', 'initializations'],
    'filenames/match-regex': ['error', '^[a-z0-9\\-\\.]+$'],
    'new-cap': ['error', {capIsNewExceptions: ['Map']}],
    yoda: ['error', 'always'],
    'handle-callback-err': 'error',
    'object-curly-spacing': ['error', 'never'],
    'object-curly-newline': ["error", {
      "ObjectExpression": {
        "minProperties": 4,
        "multiline": true,
        "consistent": true
      },
      "ObjectPattern": {
        "multiline": true,
        "consistent": true
      }
    }],
    'import/prefer-default-export': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'global-require': 'off',
    'func-style': ['error', 'declaration'],
    'func-names': 'error',
    'no-underscore-dangle': ['error', {allow: ['_links', '_embedded']}],
    'no-unused-vars': ['error', {ignoreRestSiblings: true}],
    'no-multi-spaces': ['error', {ignoreEOLComments: true}],
    'eslint-comments/disable-enable-pair': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error'
  }
};
