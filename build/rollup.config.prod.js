process.env.NODE_ENV = 'production';

const configList = require('./rollup.config');

configList.map((config, index) => {

  config.output.sourcemap = false;
  config.plugins = [
    ...config.plugins,
  ]

  return config;
})

module.exports = configList;