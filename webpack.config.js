const path = require('path');

module.exports = {
    //配置开发模式  development:开发    production:生产
    mode: "development",
    // 入口文件
    entry: {
        app: './src/index.js'
    },
    // 输出到dist文件夹, 文件名字为bundle.js
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'./dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    //配置webpack-dev-server，实现自动编译和刷新
    devServer: {
        // port: 3000,         //如果省略，默认是8080
        contentBase: './dist'
    }
}