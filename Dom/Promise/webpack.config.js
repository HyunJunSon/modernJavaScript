const path = require('path');

module.exports = {
    entry: ['core-js/stable',
    'regenerator-runtime/runtime',
    './src/js/main.js'], // 실제 엔트리 파일 경로 // entry 파일 경로 확인
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './dist/js/bundle.js' // 정확한 출력 파일 경로 설정
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: [path.resolve(__dirname, 'src/js')],
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'], // 정확한 babel preset 사용
                    plugins: ['@babel/plugin-proposal-class-properties'] // 올바른 플러그인 이름 사용
                }
            }
        }]
    },
    devtool: 'source-map',
    mode: 'development'
};