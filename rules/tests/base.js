module.exports = {
  extends: [
    '../es6.js'
  ],

  rules: {
    'no-undefined': 'off',
    'handle-callback-err': 'off',
    'func-style': ['error', 'declaration', {allowArrowFunctions: true}]
  }
};
