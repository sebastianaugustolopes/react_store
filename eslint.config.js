// Importa a configuração padrão de regras do ESLint para JavaScript
import js from '@eslint/js';

// Importa definições globais para ambientes como browser, Node.js, etc.
import globals from 'globals';

// Plugins para validação de regras específicas do React (hooks, fast refresh e componentes)
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';

// Ferramentas e regras específicas para TypeScript
import tseslint from 'typescript-eslint';

// Função do ESLint usada para definir a configuração com múltiplos blocos
import { defineConfig } from 'eslint/config';

import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default defineConfig([
  // CONFIGURAÇÃO BASE — aplicada a todos os arquivos do projeto
  {
    name: 'base',
    linterOptions: {
      // Gera erro se eslint-disable for usado sem necessidade, ou seja, se não houver nenhuma regra sendo realmente violada.
      reportUnusedDisableDirectives: 'error',
    },
    // Ignora essas pastas no lint
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.git/**',
      '**/.vscode/**',
      'prisma/**',
      'generated/**',
      '**/prisma/**',
      '**/generated/**',
    ],
  },

  // CONFIGURAÇÃO PARA ARQUIVOS JAVASCRIPT
  {
    name: 'javascript',
    files: ['**/*.{js,jsx,mjs,cjs}'], // Arquivos .js, .jsx, .mjs e .cjs
    languageOptions: {
      ecmaVersion: 'latest', // Usa a versão mais recente do ECMAScript
      sourceType: 'module', // Permite uso de imports/exports
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Habilita sintaxe JSX (usada em React)
        },
      },
    },
    plugins: {
      react: react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    settings: {
      react: {
        version: 'detect', // Detecta automaticamente a versão do React no projeto
      },
    },
    rules: {
      ...js.configs.recommended.rules, // Regras recomendadas do ESLint para JS
      ...reactHooks.configs.recommended.rules, // Regras recomendadas para React Hooks

      // Só exportar componentes no React Refresh
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Regras relacionadas ao uso de React e JSX
      'react/jsx-uses-react': 'error', // Garante que o React está em uso no JSX
      'react/jsx-uses-vars': 'error', // Evita variáveis não usadas no JSX

      // Regras gerais de JavaScript
      'no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }, // Ignora variáveis/args que começam com _
      ],
      'no-console': 'off', // Permite uso de console.log sem avisos
      'prefer-const': 'error', // Sugere usar const se não houver reatribuição
      eqeqeq: ['error', 'always', { null: 'ignore' }], // Obriga usar === ao invés de ==
    },
  },

  // CONFIGURAÇÃO PARA TYPESCRIPT
  tseslint.config(
    {
      name: 'typescript',
      files: ['**/*.{ts,tsx}'], // Aplica a arquivos .ts e .tsx
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: tseslint.parser, // Parser que entende TypeScript
        globals: {
          ...globals.browser,
          ...globals.node,
          ...globals.es2021,
        },
        parserOptions: {
          project: './tsconfig.eslint.json', // Lê configurações do TS
          ecmaFeatures: {
            jsx: true, // Habilita JSX
          },
        },
      },
      plugins: {
        react: react,
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
        '@typescript-eslint': tseslint.plugin,
      },
      settings: {
        react: {
          version: 'detect', // Detecta a versão do React
        },
      },
      rules: {
        ...reactHooks.configs.recommended.rules,

        // Regras do React
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/prop-types': 'off', // Não precisa com TypeScript
        'react/react-in-jsx-scope': 'off', // React 17+

        // Regras específicas do TypeScript
        '@typescript-eslint/explicit-module-boundary-types': 'warn', // Sugere tipar funções públicas
        '@typescript-eslint/no-explicit-any': 'warn', // Evita uso de `any` sem necessidade
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { prefer: 'type-imports' }, // Sugere `import type {}` para evitar código desnecessário
        ],
        '@typescript-eslint/no-floating-promises': 'error', // Promessas devem ser tratadas corretamente
        '@typescript-eslint/no-misused-promises': 'error', // Evita usar promessas em contextos incorretos

        // Desativa regras JS que já são tratadas pelo TS
        'no-unused-vars': 'off',
      },
    },
    // Inclui as configurações recomendadas e de estilo do TypeScript
    tseslint.configs.recommended,
    tseslint.configs.stylistic,
  ),

  // CONFIGURAÇÃO PARA PRETTIER
  {
    name: 'prettier',
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
    extends: [prettierConfig],
  },
]);
