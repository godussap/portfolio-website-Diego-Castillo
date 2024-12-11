const path = require('path');
const { defineConfig } = require('@vue/cli-service');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');



module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  
   outputDir: 'dist', // Ensure this matches your build output

   publicPath: '/', // Ensure this is set correctly
  configureWebpack: {
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
      },
    },
    plugins: [

      new BundleAnalyzerPlugin()

    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          default: {
            minChunks: 2,  // Split chunks that are shared by at least 2 modules
            priority: -10, // Set a lower priority for the default chunk
          },
        },
      },
    },
  },

  pwa: {
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 15 * 1024 * 1024, // 15 MB
    },
  },
});


