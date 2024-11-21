const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
   transpileDependencies: true,
   lintOnSave: false, // Example setting
});

const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
      },
    },
  },
};

