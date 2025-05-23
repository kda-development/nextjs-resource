import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: {
      js,
      react: pluginReact,
      prettier: pluginPrettier,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // Menggabungkan semua rule dari react
      ...pluginReact.configs.recommended.rules,

      // Tambahkan rule prettier
      'prettier/prettier': [
        'error',
        {
          semi: true,
          singleQuote: true,
          trailingComma: 'es5',
          printWidth: 80,
          tabWidth: 2,
          bracketSpacing: true,
          arrowParens: 'avoid',
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]);
