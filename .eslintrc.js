module.exports = {
    extends: ['airbnb-typescript-prettier'],
    rules: {
        // just say "no" to default exports!
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
        '@typescript-eslint/camelcase': 'off',
        'react/prefer-stateless-function': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
    },
    ignorePatterns: ['*.config.js', '*.test.tsx'],
}
