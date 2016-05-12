// var webpack = require('webpack');
// var debug = process.env.NODE_ENV !== "production";

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry: ["./module1.jsx", "./style.scss"],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    // plugins: debug ? [] : [
    //     new webpack.optimize.DedupePlugin(),
    //     new webpack.optimize.OccurenceOrderPlugin(),
    //     new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false, compress: {warnings: false}})
    // ],
    module: {
        loaders: [
            { 
                test: /.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                   presets: ['es2015', 'react']
                }
            },
            { test: /\.scss$/, loader: "style!css!sass" }
        ]
    }
};

