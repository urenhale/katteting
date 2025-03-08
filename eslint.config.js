import eslintConfigPrettier from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-plugin-prettier'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import reactRefreshPlugin from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import js from '@eslint/js'

export default [
  js.configs.recommended,
  eslintConfigPrettier,
  jsxA11yPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  reactHooksPlugin.configs.recommended,
  reactRefreshPlugin.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      prettier: prettier,
      import: importPlugin,
    },

    languageOptions: {
      globals: {
        ...globals.node,
      },

      parser: tseslint.parser,
      ecmaVersion: 2020,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]
