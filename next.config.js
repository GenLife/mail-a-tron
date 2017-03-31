module.exports = {
  webpack: (config, { dev }) => {
    //
    // Hotfix for deprecated react/lib/DOMProperty
    config.resolve.alias = {
      'react/lib/DOMProperty': 'react-dom/lib/DOMProperty'
    }

    return config
  }
}
