module.exports = {
    env: {
        mocha: true
    },

    globals: {
        document: false
    },

    rules: {
        'max-nested-callbacks': ['error', 4]
    }
};