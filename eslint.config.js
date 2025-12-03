import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginSecurity from 'eslint-plugin-security';
import pluginN from 'eslint-plugin-n';
import globals from 'globals';

export default [
  {
    ignores: ['node_modules/', 'release/'],
  },
  js.configs.recommended,
  pluginSecurity.configs.recommended,
  pluginN.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'n/no-unpublished-import': 'off',
    },
  },
];
