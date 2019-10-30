const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const src_path = './static/src/';

module.exports = {
    context: __dirname,
    entry: {
        'app.js': src_path + "app.js",
    },
    output: {
        filename: "[name]",
        path: path.resolve(__dirname, 'static', 'dist'),
        publicPath: '/static/dist/',
    },
    module: {
        rules: [
            {
                test: /\.hbs$/,
                loader: "handlebars-loader"
            },
            {
                test: /\.(eot|ttf|svg)$/,
                loader: 'file-loader',
            },
            {
                test: /\.(png|jpg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: './img/[name].[ext]',
                    }
                }
            },
            {
                test: /\.(css|styl)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'stylus-loader'],
                })
            },
            {
                test: /\.woff$/,
                loader: 'url-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    }
                }
            },
        ]
    },
    resolve: {
        alias: {
            static: path.resolve(__dirname, 'static/src'),
            main: path.resolve(__dirname, 'static/src/components/main'),
            header: path.resolve(__dirname, 'static/src/components/header'),
            content: path.resolve(__dirname, 'static/src/components/content'),
            // footer: path.resolve(__dirname, 'static/src/components/footer'),
            about: path.resolve(__dirname, 'static/src/components/about'),
            // price: path.resolve(__dirname, 'static/src/components/price'),
            teacher: path.resolve(__dirname, 'static/src/components/teacher'),
            course: path.resolve(__dirname, 'static/src/components/course'),
            news: path.resolve(__dirname, 'static/src/components/news'),
            gift: path.resolve(__dirname, 'static/src/components/gift'),
            common_article: path.resolve(__dirname, 'static/src/components/common_article'),
        },
        extensions: [".js", '.css', '.styl', '.hbs']
    },
    plugins: [
        new ExtractTextPlugin({filename: 'styles.css'}),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Popper: ['popper.js', 'default']
        })
    ],
    node: {
        fs: 'empty'
    },
};
