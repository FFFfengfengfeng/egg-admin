'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1532660852527_2062';

    // add your config here
    config.middleware = [];

    // 设置密钥
    config.security = {
        csrf: {
            enable: false
        },
        methodnoallow: {
            enable: false
        }, 
        // 白名单
        dominWhiteList: [ 'http://localhost:3000' ]
    }

    // csrf配置
    config.cors = {
        origin: '*',
        credentials: true
    }

    // 数据库配置
    config.sequelize = {
        // 数据库类型
        dialect: "mysql", 
        // 数据库名称
        database: 'news',
        // host
        host: 'localhost',
        // 端口号
        port: '3306',
        // 用户名
        username: 'root',
        // 密码
        password: ''
    };

    return config;
};
