var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        // /src/index.js
        './src'
    ],
    output: {
        path: path.join(__dirname, 'public/javascripts'),
        // <script src="bundle.js"></script>
        filename: 'bundle.js'
    },
    resolve: {
        // No need to write './' when importing from /src
        modulesDirectories: ['node_modules', 'src'],
        // No need to write extensions when importing .jsx files
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                // Loads for .js and .jsx files
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    devServer: {
        proxy: {
            '*': {
                target: 'http://127.0.0.1:3000',
                secure: false
            }
        }
    }
};
