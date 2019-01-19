module.exports = {
  extends: [
    '../react.js'
  ],

  rules: {
    'react/jsx-boolean-value': ['error', 'always'],
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/heading-has-content': 'off',
    'react/jsx-no-bind': ['error', {allowArrowFunctions: true}]
  }
};
