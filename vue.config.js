// vue.config.js
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: [], // Atau array dependensi jika ada
  devServer: {
    host: '0.0.0.0',         // Wajib agar bisa diakses dari luar kontainer
    port: 8080,              // Port yang Anda gunakan (default 8080)
    allowedHosts: 'all',     // <<< GUNAKAN INI. Atau ['all'] jika string tidak bekerja.
    // ATAU jika Anda ingin lebih spesifik (sedikit lebih aman):
    // allowedHosts: ['.gitpod.io'], // Mengizinkan semua subdomain dari gitpod.io

    client: {
      // Pastikan ini ada untuk HMR di Gitpod/Docker
      webSocketURL: 'auto://0.0.0.0:0/ws'
      // ATAU jika 'auto' tidak bekerja, Anda mungkin perlu menentukannya secara eksplisit
      // berdasarkan URL Gitpod Anda, contoh:
      // webSocketURL: {
      //   hostname: 'auto', // Atau hostname Gitpod Anda jika 'auto' tidak cukup
      //   pathname: '/ws',
      //   port: '0', // Atau port Gitpod Anda (443 untuk HTTPS biasanya)
      //   protocol: 'auto' // Atau 'wss'
      // },
    },
    headers: { // Untuk mengatasi masalah CORS potensial
      "Access-Control-Allow-Origin": "*",
    }
  }
  // ... opsi konfigurasi Vue CLI lainnya jika ada ...
});