// .eslintrc.js
module.exports = {
    root: true,
    env: {
      node: true,
      'vue/setup-compiler-macros': true // Ini yang penting untuk defineProps/Emits
    },
    extends: [
      'plugin:vue/vue3-essential', // Atau 'plugin:vue/vue3-recommended'
      'eslint:recommended'
    ],
    parserOptions: {
      parser: '@babel/eslint-parser', // Pastikan @babel/eslint-parser terinstal
      requireConfigFile: false // Biasanya diperlukan untuk @babel/eslint-parser
    },
    rules: {
      // Anda bisa menambahkan aturan kustom di sini jika perlu
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    }
  };