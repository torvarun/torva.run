const path = require('path')
const withMDX = require('@next/mdx')()

const config = {
  webpack(config) {
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      src: path.resolve(__dirname, 'src')
    })

    return config
  },
  exportTrailingSlash: true
}

module.exports = withMDX(config)
