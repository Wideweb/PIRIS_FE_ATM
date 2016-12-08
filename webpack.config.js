var webpack = require('webpack');
var here = require('path-here');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var _ = require('lodash');

var context = process.env.NODE_ENV || 'development';

function getDevConfig() {
    var devConfig =
        {
            context: here('app'),
            entry: './index.js',
            output: {
                path: here('app'),
                filename: 'bundle.js',
                devtoolModuleFilenameTemplate: '[absolute-resource-path]',
                devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
            },
            devtool: 'source-map',
            module: {
                loaders: _.union(
                    getJavaScriptLoaders(),
                    [
                        {
                            test: /\.html$/,
                            loader: 'raw',
                            exclude: /node_modules/
                        },
                        {
                            test: /\.css$/,
                            loader: 'style!css',
                            exclude: /node_modules/
                        },
                        {   test: /\.scss$/, 
                            loader: 'style!css!sass'
                        },
                        { 
                            test: /\.(woff2?|svg)$/, 
                            loader: 'url?limit=10000' 
                        },
                        { 
                            test: /\.(ttf|eot)$/, 
                            loader: 'file' 
                        },
                        {   test: /bootstrap\/dist\/js\/umd\//, 
                            loader: 'imports?jQuery=jquery' 
                        },
                        {
                            test: /\.(jpe?g|png|gif|svg)$/i,
                            loaders: [
                                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                            ]
                        }
                    ]
                )
            },
            plugins: [
                new webpack.ProvidePlugin({
                    jQuery: 'jquery',
                    $: 'jquery',
                    jquery: 'jquery'
                })
            ],
            devServer: {
                contentBase: here('app'),
                colors: true,
                progress: true,
                inline: true
            }
        }

    return devConfig;
};

function getJavaScriptLoaders() {
    // if (context.indexOf('test') === -1) {
    return [
        {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }
    ];
    /*} else {
        return [
            {
                test: /\.test\.js$|\.mock\.js$/, // include only mock and test files
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.js$/,
                loader: 'isparta',
                exclude: /node_modules|\.test.js$|\.mock\.js$/ // exclude node_modules and test files
            }
        ];
    }*/
}

function getTestConfig() {
    var testConfig = _.merge({}, getDevConfig(), {
        entry: './index.test.js'
    });

    return testConfig;
};

function getProdConfig(uglify) {
    var prodConfig = _.merge({}, getDevConfig(), {
        output: {
            path: here('dist'),
            filename: 'bundle.js'
        }
    });

    prodConfig.plugins = _.union(prodConfig.plugins, [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new CopyWebpackPlugin([
            {
                context: here('app'),
                from: './index.html',
                to: here('dist')
            }
        ])
    ]);

    if (uglify) {
        prodConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }));
    }

    return prodConfig;
};

function getTestCIConfig() {
    var uglify = false;
    return _.merge({}, getProdConfig(uglify), {
        entry: './index.test.js',
        module: {
            postLoaders: [
                // we do this because we don't want the tests uglified
                { test: /\.js$/, loader: 'uglify', exclude: /\.test\.js$|\.mock\.js$/ }
            ]
        },
        'uglify-loader': {
            compress: { warnings: false }
        }
    });
}

var configs = {
    development: getDevConfig,
    production: getProdConfig,
    test: getTestConfig,
    'test:ci': getTestCIConfig
}

module.exports = configs[context]();