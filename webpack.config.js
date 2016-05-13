module.exports = {
    context: __dirname + '/public/javascripts',
    devtool: "inline-sourcemap",
    entry: "./script.jsx",
    output: {
        path: './public/javascripts/',
        filename: "bundle.js"
    },    
    module: {
        loaders: [
            {
                test:/.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                   presets: ['es2015', 'react']
                }
            },
            { test: /\.scss$/, loader: "style!css!sass" }
        ]
    },
    devServer: {
        proxy: {
          '*': {
            target: 'http://localhost:3000',
            secure: false
          }
        }
    }
};
