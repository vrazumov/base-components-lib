# base-app-template
base app template with webpack 4 and babel
# Использование

## Создание шаблона

### Создаем package.json

---
    {
      "name": "base-app-template",
      "version": "0.1.0",
      "description":   "base-app-react-webpack-babel-template",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "echo \"Error: no start specified\" && exit 1",
        "build": "echo \"Error: no build specified\" && exit 1"
      },
      "keywords": [],
      "author": "vladimir razumov",
      "license": "ISC",
      "devDependencies": {},
      "dependencies": {}
    }

## Создаем файлы

### .gitignore

node_modules/

### .babelrc

    {
      "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
      ]
    }

### webpack.config.js

    module.exports = {
      entry: './src/index.js',
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
      output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin()
      ],
      devServer: {
        contentBase: './dist',
        hot: true
      }
    };


## Установим пакеты

yarn add -D  webpack webpack-cli webpack-dev-server

yarn add -D  @babel/core @babel/preset-env babel-loader @babel/preset-react

yarn add react react-dom

## Изменим содерхимое секции package.json

 "scripts": {
    "start": "webpack-dev-server --config ./webpack.config.js --mode development",
    "test": "echo \"No test specified\" && exit 0"
  },

## Добавим файл src/index.js

mkdir src
touch src/index.js

    import React from 'react';
    import ReactDOM from 'react-dom';

    const title = 'My Minimal React Webpack Babel Setup';

    ReactDOM.render(
      <div>{title}</div>,
      document.getElementById('app')
    );

    module.hot.accept();

## Добавим файл dist/index.html

mkdir dist
touch dist/index.html

    <!DOCTYPE html>
    <html>
      <head>
        <title>Base App React Webpack Babel Template</title>
      </head>
      <body>
        <div id="app"></div>
        <script src="/bundle.js"></script>
      </body>
    </html>


## Проверим работу
npm start
* visit `http://localhost:8080/`





