// 导入全局变量
import globals from 'globals'
// 导入 JavaScript 相关的 ESLint 插件
import eslint from '@eslint/js'
// 导入 Prettier 的 ESLint 配置
import eslintConfigPrettier from 'eslint-config-prettier'
// 导入 TypeScript ESLint 插件
import typescriptEslint from 'typescript-eslint'
// 导入 Vue ESLint 插件
import eslintPluginVue from 'eslint-plugin-vue'

// 导出 TypeScript ESLint 配置
export default typescriptEslint.config(
  { ignores: ['*.d.ts', '**/dist'] }, // 忽略的文件
  {
    extends: [
      eslint.configs.recommended, // 使用推荐的 ESLint 配置
      ...typescriptEslint.configs.recommended, // 使用 TypeScript 推荐的配置
      ...eslintPluginVue.configs['flat/recommended'], // 使用 Vue 推荐的配置
    ],
    files: ['src/**/*.{js,mjs,cjs,ts,vue}'], // 适用的文件类型
    languageOptions: {
      ecmaVersion: 'latest', // ECMAScript 版本
      sourceType: 'module', // 使用模块化
      globals: globals.browser, // 定义全局变量
      parserOptions: {
        parser: typescriptEslint.parser, // 使用 TypeScript 解析器
      },
    },
    rules: {
      // 基础规则
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境下禁止使用 console
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境下禁止使用 debugger
      'no-unused-vars': 'off', // 关闭未使用变量的检查

      // TypeScript 规则
      '@typescript-eslint/no-unused-vars': 'off', // 关闭未使用变量的检查
      '@typescript-eslint/no-explicit-any': 'warn', // 警告使用 any 类型

      // Vue 规则
      'vue/multi-word-component-names': 'off', // 关闭多单词组件名称的检查
      'vue/no-v-html': 'off', // 关闭 v-html 的检查
    },
  },
  eslintConfigPrettier, // 使用 Prettier 的 ESLint 配置
)
