const config = {
    entry: [
        'webpack-dev-server/client?https://0.0.0.0:8080',
        './src/index.tsx'
    ],
    output: {
        filename: 'bundle.js'
    },
    
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: [/node_modules/]
            }
        ]
    }
};

module.exports = config;