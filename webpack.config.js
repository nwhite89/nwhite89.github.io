var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    // ngAnnotatePlugin = require('ng-annotate-webpack-plugin'),
    bowerRoot = path.join(__dirname, 'vendor'),
    nodeModulesRoot = path.join(__dirname, 'node_modules'),
    config;

config = {
    cache: true,
    entry: {
        // Our main entry point of the project
        app: path.join(__dirname, './src/js/app.js')
    },

    output: {
        path: path.join(__dirname),
        publicPath: './',
        filename: '[name].js'
    },

    resolve: {
        modulesDirectories: [
            bowerRoot,
            nodeModulesRoot
        ],
        alias: {
            'api': path.join(__dirname, 'src/api'),
            'html': path.join(__dirname, 'src/html'),
            'bootstrap': path.join(nodeModulesRoot, 'bootstrap-sass/assets/stylesheets/bootstrap'),
            'templates': path.join(__dirname, 'src/templates'),
            'img': path.join(__dirname, 'src/img')
        }
    },

    plugins: [
        // new ngAnnotatePlugin({
        //     add: true,
        //     'single_quotes': true
        // }),
        new webpack.ResolverPlugin([
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main']),
            new webpack.ResolverPlugin.FileAppendPlugin(['index.js'])
        ]),
        new ExtractTextPlugin('style.css'),
        new webpack.DefinePlugin({
            'ENVIRONMENT': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.ProvidePlugin({
            angular: 'exports?window.angular!angular/angular'
        }),
        new HtmlWebpackPlugin({
            template: 'src/html/index.ejs',
            title: 'Nick White :: Software Engineer',
            inject: false,
            hash: false,
            minify: false
        })
    ],

    module: {
        loaders: [
            {
                test: /\.((jpg)|(png))$/,
                loader: 'file-loader?name=images/[hash].[ext]'
            },
            {
                test: /\.((woff2)|(woff)|(ttf)|(eot))$/,
                loader: 'file-loader?name=fonts/[hash].[ext]'
            },
            {
                test: /\.(scss)$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css!sass'
                )
            },
            {
                test: /\.(json)$/,
                loader: 'json-loader'
            },
            {
                test: /\.(html)$/,
                loader: 'html-loader?minimize=false&interpolate'
            }
        ],
        noParse: [
            // We don't need to webpack "parse" pre-packaged Angular modules
            path.join(bowerRoot, '/angular'),
            path.join(bowerRoot, '/angular-resource'),
            path.join(bowerRoot, '/angular-sanitize'),
            path.join(bowerRoot, '/bootstrap-sass-official'),
            path.join(bowerRoot, '/jquery'),
            path.join(bowerRoot, '/ng-lodash')
        ]
    }
};

module.exports = config;
