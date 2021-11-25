const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.common.js')

module.exports = function ({ env }) {
  const envConfig = require(`./webpack.${env}.js`)
  const config = merge(commonConfig(env), envConfig)

  return config
}
