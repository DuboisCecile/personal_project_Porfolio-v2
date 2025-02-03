import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
// import importAliasPlugin from 'eslint-plugin-import-alias';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        ignores: [
            'dist',
            'tailwind.config.js',
            'vite.config.ts',
            'eslint.config.js',
            'postcss.config.js',
        ],
    },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}', '**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                projectService: './tsconfig.json',
                tsconfigRootDir: './',
            },
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            import: importPlugin,
            // 'import-alias': importAliasPlugin,
            react: react,
        },
        rules: {
            // No need to add these lines because we are already getting all the recommended ESLint rules as part of the TypeScript plugin tseslint
            // // Base rules from ESLint and TypeScript ESLint
            // ...js.configs.recommended.rules,
            // ...tseslint.configs.recommended.rules,

            // Extend rules from React Hooks plugin, promoting best practices when using hooks
            ...reactHooks.configs.recommended.rules,

            // Custom rules

            // Warn if console.log is used, but allow console.error and console.warn
            'no-console': ['warn', { allow: ['error', 'warn'] }],

            // This rule is useful for React applications using React Refresh. It helps ensure that only components are exported, which improves the performance of React Refresh.
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],

            // Disable the standard ESLint rule for unused variables
            'no-unused-vars': 'off',
            // Warn if there are unused variables
            '@typescript-eslint/no-unused-vars': [
                // 'warn', // Mark unused variables as warnings
                'error', // Mark unused variables as errors
                {
                    args: 'none', // Ignore unused function arguments
                    vars: 'all', // Report all unused variables, including those declared but not used
                    ignoreRestSiblings: true, // ignore unused rest siblings from a spread operation
                    varsIgnorePattern: '^_', // ignore unused variables starting with an underscore
                },
            ],

            // Error if a variable is used without being defined
            'no-undef': 'error',

            // Warn if module boundary types are not explicitly defined (to explicitly define return types on exported functions and classes)
            // This rule enforces explicit return types for exported functions and classes. This means that if you're exporting a function, you'll need to define its return type explicitly.
            '@typescript-eslint/explicit-module-boundary-types': 'warn',

            // Warn if the 'any' type is used
            '@typescript-eslint/no-explicit-any': 'warn',

            // Warn if an inferrable type is used (on explicit typing for variables that can be inferred)
            '@typescript-eslint/no-inferrable-types': 'warn',

            // Warn if a non-null assertion is used (against non-null assertions (e.g. `!`))
            '@typescript-eslint/no-non-null-assertion': 'warn',

            // Error if a promise is created without being awaited
            '@typescript-eslint/no-floating-promises': 'error',

            // Warn if an optional chain is not used (to use optional chaining when accessing properties)
            '@typescript-eslint/prefer-optional-chain': 'warn',

            // Warn if a function return type is not explicitly defined (to explicitly define return types on functions)
            // This rule enforces explicit return types for all functions, whether they're exported or not.
            '@typescript-eslint/explicit-function-return-type': 'warn',

            // Warn if a type definition is not consistent (to use interfaces instead of type aliases)
            '@typescript-eslint/consistent-type-definitions': [
                'error',
                'interface',
            ],

            // Warn if a variable or a function is used before it is defined
            'no-use-before-define': 'warn',

            // Automatically replaces string concatenation with template literals
            'prefer-template': 'error',

            // Disallow nested ternary expressions
            'no-nested-ternary': 'error',

            // // Enforces the use of the @ alias for imports from the src directory, instead of using relative paths.
            // 'import-alias/import-alias': [
            //     'error',
            //     {
            //         relativeDepth: 0,
            //         aliases: [{ alias: '@', matcher: '^src' }], // Defines alias for src
            //     },
            // ],

            // // Prevents the use of relative imports with ../ and instead encourages the use of the @ alias.
            // 'no-restricted-imports': [
            //     'error',
            //     {
            //         patterns: [
            //             {
            //                 group: ['../*'],
            //                 message:
            //                     'Use the @ alias instead of relative imports with ../',
            //             },
            //         ],
            //     },
            // ],

            // Enforces a specific order for organizing your imports. It groups them into categories (e.g., builtin, external, internal, parent, sibling, index) and ensures that they are sorted alphabetically within each group.
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin', // Native Node.js modules
                        'external', // npm packages
                        'internal', // Alias paths (@/*)
                        'parent', // ../
                        'sibling', // ./
                        'index', // .
                    ],
                    'newlines-between': 'always',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                    // pathGroups: [
                    //     {
                    //         pattern: '@/**',
                    //         group: 'internal',
                    //         position: 'after',
                    //     },
                    // ],
                    // pathGroupsExcludedImportTypes: ['builtin'],
                },
            ],

            // Empty line after imports
            'import/newline-after-import': ['error', { count: 1 }],

            // Arrow function simplification
            'arrow-body-style': ['error', 'as-needed'],

            // Remove unnecessary React fragments
            'react/jsx-no-useless-fragment': [
                'error',
                {
                    allowExpressions: true,
                },
            ],

            // Automatically close self-closing components
            'react/self-closing-comp': [
                'warn',
                {
                    component: true,
                    html: true,
                },
            ],

            // Remove unnecessary React fragments
            'react/jsx-no-useless-fragment': 'error',
        },
        // TypeScript and Node.js import resolution settings
        settings: {
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx'],
            },
            'import/resolver': {
                typescript: {
                    alwaysTryTypes: true,
                    project: './tsconfig.json',
                },
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                },
            },
        },
    }
);
