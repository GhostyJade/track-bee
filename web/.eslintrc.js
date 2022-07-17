module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['react', '@typescript-eslint', 'import'],
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'eslint:recommended',
        'prettier',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    globals: {
        React: true,
        JSX: true,
        jsdom: true,
    },
    rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        'linebreak-style': 'off',
        'no-unused-vars': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
};
