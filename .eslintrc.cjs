module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  settings: { react: { version: 'detect' } },
  plugins: ['react-refresh'],
  rules: {
    'react/prop-types': 'off',
    // Apostrophes and quotes in JSX text render fine in React; this rule is
    // purely stylistic and noisy for prose-heavy pages.
    'react/no-unescaped-entities': 'off',
    // Context files legitimately export hooks alongside their provider.
    'react-refresh/only-export-components': 'off',
    'no-unused-vars': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
  },
  overrides: [
    {
      // Test files use Vitest globals (vi, describe, it, expect).
      files: ['**/*.test.{js,jsx}', 'src/test/**', 'tests/**'],
      env: { node: true },
      globals: {
        vi: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
      },
      rules: {
        'react/display-name': 'off',
      },
    },
  ],
}
