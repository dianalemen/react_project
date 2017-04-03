const webpack = require('webpack');


module.exexports = {

    entry: {
        app: "./app.jsx"
    },
    devtool: "source-map",
    context: __dirname,
    resolve: {
        extensions: ['.less', '.jsx', '.json', '.js']
    },
    module: {
        rules: [
            { test: /\.jsx?$/, use: ['babel-loader'], exclude: /node_modules/ },
            { test: /\.json?$/, use: ['json-loader'], exclude: /node_modules/ },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        port: 8181
    },
    output: {
        filename: '[name].bundle.js',
        path: `${__dirname}/dist`,
        publicPath: '/assets'
    }
}