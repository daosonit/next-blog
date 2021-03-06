const path = require('path');
const dotenv = require('dotenv-webpack');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname)
    config.plugins.push(new dotenv({silent: true}));
    return config;
  }
}