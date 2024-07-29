import { createRequire } from 'module';
import { FlatCompat } from '@eslint/eslintrc';

const require = createRequire(import.meta.url);
const compat = new FlatCompat({
    baseDirectory: process.cwd(), 
});

const reactAppConfig = require('eslint-config-react-app');

const eslintConfig = [
    ...compat.config(reactAppConfig), 
    {
        ignores: ['node_modules/**'],
    },
    {
        files: ['**/*.js', '**/*.jsx'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parser: require('@babel/eslint-parser'),
        },
        plugins: {
            react: require('eslint-plugin-react'),
            reactHooks: require('eslint-plugin-react-hooks'),
            jsxA11y: require('eslint-plugin-jsx-a11y'),
            flowtype: require('eslint-plugin-flowtype'), 
        },
        rules: {
            'react/jsx-uses-react': 'off', 
            'react/react-in-jsx-scope': 'off',
           
        },
        settings: {
            react: {
                version: 'detect', 
            },
        },
    },
];
export default eslintConfig