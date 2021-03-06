const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let config = {
    mode: process.env.NODE_ENV,
    entry: {
        index: ["./src/main.js", "./src/sass/style.scss"],
        confirmation: ["./src/pages/confirmation.js", "./src/pages/confirmation.scss"],
        panier: ["./src/pages/panier.js", "./src/pages/panier.scss"],
        produit: ["./src/pages/produit.js", "./src/pages/produit.scss"]
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ],
            },
        ],
    },
    plugins: [
        // new CleanWebpackPlugin(), // <-- only for production
        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
};

module.exports = config;