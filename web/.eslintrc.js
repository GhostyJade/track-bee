module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['react', '@typescript-eslint', 'import', 'i18next', 'jest'],
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'airbnb-typescript',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended',
        'plugin:storybook/recommended',
        'plugin:jest/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
    },
    globals: {
        React: true,
        JSX: true,
        jsdom: true,
        jest: true,
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
