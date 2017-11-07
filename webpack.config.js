module.exports = {
    entry: './source/main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            },
            { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            }
        ]
    }

};