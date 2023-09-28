/*
 * @Author: zhangxiangxiang
 * @Description:
 * @Date: 2023-08-09 16:42:03
 * @LastEditors: zhangxiangxiang
 * @LastEditTime: 2023-08-23 11:46:50
 * @FilePath: /krafthein-mpm/.eslintrc.js
 */
module.exports = {
  extends: ['@antfu'],
  ignorePatterns: ['**/*.css', '**/*.scss'],
  rules: {
    'no-console': 'off',
    'vue/max-attributes-per-line': 2,
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'n/prefer-global/process': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
    'antfu/if-newline': 'off',
  },
}
