const mix = require('laravel-mix');

/**
 * Lodash Laravel Mix Plugin
 *
 * @see https://github.com/lodash/lodash-webpack-plugin
 */
class LodashMixPlugin {

    /**
     * Register the component.
     *
     * @param  {*} ...params
     * @return {void}
     *
     */
    register(config = {}) {
        this.config = config;
    }

    /**
     * All dependencies that should be installed by Mix.
     *
     * @return {Array}
     */
    dependencies() {
        return [
            'lodash-webpack-plugin',
            'babel-plugin-lodash'
        ];
    }

    /**
     * Plugins to be merged with the master webpack config.
     *
     * @return {Array|Object}
     */
    webpackPlugins() {
        try {
            var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

            return new LodashModuleReplacementPlugin(this.config);
        } catch (e) {
            console.log('\n\tFinished. Please run Mix again.\n');
        }
    }

    /**
     * Babel config to be merged with Mix's defaults.
     *
     * @return {Object}
     */
    babelConfig() {
        return {
            plugins: ['lodash']
        };
    }
}

/**
 * Attatch API to Laravel Mix
 */
mix.extend('lodash', new LodashMixPlugin);

/**
 * Export Module
 */
module.exports = LodashMixPlugin;
