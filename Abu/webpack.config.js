module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundel.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Config: 'app/config/Config.jsx',
            Login: 'app/components/login/Login.jsx',
            LoginForm: 'app/components/login/LoginForm.jsx'
        },
        extensions: ['','.js','.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
}