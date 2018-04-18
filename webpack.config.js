
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env){
  console.log(env)
  return {
    mode:env.mode,
    // 开发配置
    devServer:{
      port:3000
    },
    // 通用配置
    entry:{
      main:'./src/index.es'
    },
    output:{
      path:path.resolve(__dirname,'./dist'),
      filename:'[name][hash:5].js'
    },
    module:{
      rules:[
        // es6+ 代码转换为es5代码，通过babel实现
        {
          test: /\.es$/,
          // 第三方依赖不执行转化的解析，提供解析效率
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['env',{
                targets:{
                  "chrome":"50"
                }
              }]]
            }
          }
        }
      ]
    },
    plugins:[
      new HtmlWebpackPlugin({
        template:'./src/index.html'
      })
    ]
  }
};
