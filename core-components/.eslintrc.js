const { NODE_ENV } = process.env

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/essential'
    ],
    env: {
        'node': true,
        'browser': true
    },
    rules: {
        'no-debugger': NODE_ENV === 'production' ? 'error' : 'off'
    }
}
