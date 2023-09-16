module.exports = {
    root: true,
    env: {browser: true, es2020: true, jest: true},
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/jsx-runtime',
        'prettier',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'react', 'react-hooks', '@typescript-eslint', 'prettier'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'spaced-comment': 'error',
        'quotes': ['error', 'single'],
        'no-duplicate-imports': 'error',
        'react-refresh/only-export-components': [
            'warn',
            {allowConstantExport: true},
        ],
    },
    settings: {
        react: {
            version: 'detect'
        },
        'import/resolver': {
            'typescript': {}
        }
    }
}
