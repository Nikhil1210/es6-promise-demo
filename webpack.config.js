module.exports = {
    entry: "./main",
    output: { filename: "app.js" },
    module: {
        loaders: [{
            test: /.ts$/,
            loader: "ts-loader"
        }]
    },
    watch: true,
    devtool: "source-map",
    resolve: {
        extensions: [" ", ".ts", ".js"]
    }
}