'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1524118239202_8278';

  // add your config here
  config.middleware = [];

  //模版配置
  config.view = {

    //全局配置默认模版
    defaultViewEngine: 'ejs',

    //匹配ejs后缀文件
    mapping: {
      '.ejs': 'ejs'
    }
  }

  return config;
};

