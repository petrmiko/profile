const config = require('./config')

module.exports = function babel(api) {
    api.cache(true)

    return {
        "presets": [
            "@babel/preset-env",
            ["@babel/preset-react", {
                "runtime": "automatic"
            }]
        ],
        "plugins": [
            config.isDevMode && "react-refresh/babel",
        ].filter(Boolean)
    }
}

