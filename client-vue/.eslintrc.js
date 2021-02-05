module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  /**
   * rules 
   * 0 off 关闭
   * warn 1  开启规则，使用警告，程序不会退出
   * error 2 开启规则，使用错误，程序退出
   */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-var-requires': 0,
    "camelcase": 'off',
    '@typescript-eslint/camelcase': 0,
  }
}
