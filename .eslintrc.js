module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    indent: [
      'error',
      2
    ],
    'vue/html-indent': [
      'error',
      2
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}