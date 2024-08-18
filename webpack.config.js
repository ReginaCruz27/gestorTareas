const path = require('path');

module.exports = {
    mode: 'development',
    entry:'./src/index.js', //Punto de entrada de la aplicación
    output: {
        filename: 'bundle.js', //Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), //Carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Regex para identificar archivos CSS
                use: ['style-loader', 'css-loader'], // Loaders para procesar archivos
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, //Excluir
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
devtool: 'source-map', // Generar source maps para facilitar la depuración
devServer: {
    static: {
      directory: path.resolve(__dirname,'dist'),
    },
    compress: true, // Hablitar compresión gzip
    port: 9000, // Puerto del servidor de desarrollo
},
};