import fs from 'node:fs'
import path from 'node:path'
import js from '@eslint/js'
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import { importX } from 'eslint-plugin-import-x'
import reactDom from 'eslint-plugin-react-dom'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import reactX from 'eslint-plugin-react-x'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

// Each folder in src/features is a feature
const features = fs
  .readdirSync(path.join(import.meta.dirname, 'src/features'), {
    withFileTypes: true,
  })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)

// Everything in src that isn't app or features, usable by both
const sharedFolders = [
  './src/assets',
  './src/components',
  './src/config',
  './src/hooks',
  './src/lib',
  './src/locales',
  './src/stores',
  './src/testing',
  './src/types',
  './src/utils',
]

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      reactX.configs['recommended-type-checked'],
      reactDom.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2023,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-confusing-void-expression': [
        'error',
        { ignoreArrowShorthand: true },
      ],
      '@typescript-eslint/no-non-null-assertion': 'off',
      'react-x/no-leaked-conditional-rendering': 'off',
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: { 'import-x': importX },
    settings: {
      // Resolves the `@/` alias, so these rules can check aliased imports
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          project: path.join(import.meta.dirname, 'tsconfig.app.json'),
        }),
      ],
    },
    rules: {
      // Imports flow one way: shared -> features -> app
      'import-x/no-restricted-paths': [
        'error',
        {
          basePath: import.meta.dirname,
          zones: [
            // Features stay independent; compose them in src/app instead
            ...features.map((feature) => ({
              target: `./src/features/${feature}`,
              from: './src/features',
              except: [`./${feature}`],
              message: 'Features cannot import from other features.',
            })),
            {
              target: './src/features',
              from: './src/app',
              message: 'Features cannot import from src/app.',
            },
            {
              target: sharedFolders,
              from: ['./src/features', './src/app'],
              message: 'Shared code cannot import from features or src/app.',
            },
          ],
        },
      ],
    },
  },
  eslintConfigPrettier,
])
