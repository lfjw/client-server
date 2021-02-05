
module.exports = {
  devServer: {
    port: 3030,
    proxy: {
      '/api/': {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  }
}