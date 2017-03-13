
module.exports = {
  plugins: [
    'cucumber'
  ],

  rules: {
    'no-invalid-this': 'off',
    'cucumber/async-then': 'error',
    'func-names': 'off',
    'filenames/match-regex': ['error', '^[a-z0-9\\-\\.]+.-steps'],
    'new-cap': [
      'error',
      {
        capIsNewExceptions: [
          'Before',
          'After',
          'Given',
          'When',
          'Then'
        ]
      }
    ]
  }
};
