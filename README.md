BELOW ARE GENERAL TEMPLATES TO BUILD DIFFERENT PORTIONS OF A WEBPAGE

Boilerplate Things:

BABEL/WEBPACK:
npm install --save-dev webpack webpack-dev-server nodemon @babel/core babel-loader @babel/preset-env @babel/polyfill style-loader css-loader

package.json:
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start-server": "nodemon main.js -e html,js,css --ignore public",
    "build": "webpack",
    "build-watch": "webpack -w",
    "start": "npm run build-watch & npm run start-server"
  }
```

webpack.config.js:
```
const path = require('path');

module.exports = {
  entry: {
    app: ['@babel/polyfill','./app/app.js']
  },
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /jsx?$/,
        include: path.resolve(__dirname, './app'),
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    stats: {
      chunks: false
    }
  }
}
```

======================================================

SERVER (express/psql/sequelize):
npm install express pg sequelize

======================================================

FRONT END (react/redux):
npm install react react-dom react-redux react-router react-router-dom redux redux-thunk styled-components axios

======================================================

AUTHENTICATION (jsonwebtoken bcrypt):

