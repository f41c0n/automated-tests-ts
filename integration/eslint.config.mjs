import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

export default tseslint.config(
    { ignores: ['build/**', 'node_modules/**'] },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        plugins: { '@stylistic': stylistic },
        rules: {
            // The suite intentionally uses `any` (chakram ships no types) — matches old tslint "no-any": false.
            '@typescript-eslint/no-explicit-any': 'off',
            // Style rules carried over from the previous tslint config.
            '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
            '@stylistic/semi': ['error', 'always'],
            '@stylistic/indent': ['error', 4],
            '@stylistic/no-trailing-spaces': 'error',
        },
    },
);
