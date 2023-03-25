module.exports = {
  devServer: {
    port: 28000,
    proxy: {
      '/api': {
        target: 'http://localhost:27000',
        pathRewrite: { '^/api': '' }
      }
    }
  },
  css: {
    sourceMap: true
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.txt/,
          type: 'asset/source',
        }
      ]
    },
    performance: {
      hints: false
    },
    optimization: {
      splitChunks: {
        minSize: 100000,
        maxSize: 2500000
      }
    }
  }
}
