/* config-overrides.js */
const rewireCssModules = require('react-app-rewire-css-modules');
const rewirePostCSS = require('react-app-rewire-postcss');

module.exports = function override(config, env) {

    config = rewirePostCSS(config, {
        plugins: loader => [
            require('autoprefixer')(),
            require('postcss-import')(),
            require('postcss-cssnext')()
        ]
    });

    config = rewireCssModules(config, env);

    return config;
};