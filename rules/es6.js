module.exports = {
    parserOptions: {
        sourceType: 'module'
    },

    env: {
        node: true,
        es6: true
    },

    extends: [
        'eslint:recommended',
        'defaults/configurations/walmart/es6'
    ],

    rules: {
        camelcase: 'error',
        'prefer-arrow-callback': 'error',
        'prefer-template': 'error',
        'no-multiple-empty-lines': 'error',
        quotes: ['error', 'single'],
        indent: ['error', 4],
        'max-len': ['error', 120, 4],
        'one-var': ['error', 'always'],
        'func-style': ['error', 'declaration'],
        yoda: ['error', 'always'],
        'linebreak-style': ['error', 'unix'],
        'new-cap': ['error', {capIsNewExceptions: ['Map']}]
    }
};
