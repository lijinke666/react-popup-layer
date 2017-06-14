const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin") 

module.exports = {
    entry: path.join(__dirname, '../example/example.js'),

    output: {
        path: path.join(__dirname, '../example/build'),
        filename: 'bundle.js',
        publicPath:"./"
    },

    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: 'babel-loader'
             },
            { 
                test: /\.less$/,
                use: [
                        { loader: "style-loader" },     
                        { loader: "css-loader", options: { minimize: false, sourceMap: true } },  
                        { loader: "less-loader", options: { sourceMap: true } }
                    ]
             }
        ],
    },

    devtool: 'source-map',

    devServer: {
        contentBase: path.join(__dirname, '../example/'),
        publicPath: '/build/',
        historyApiFallback: true,
    },
    plugins:[
        new webpack.NamedModulesPlugin(),         
        new webpack.NoEmitOnErrorsPlugin(),          
        new HtmlWebpackPlugin({
            title: "example",
            filename: "index.html",           
            template: path.join(__dirname, "../example/example.html"),  
            hash: true,       
        })
    ]
}