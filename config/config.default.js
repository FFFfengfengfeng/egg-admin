'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1532660852527_2062';

    // add your config here
    config.middleware = [];

    config.view = {
        defaultViewEngine: 'ejs',
        mapping: {
            '.ejs': 'ejs'
        }
    }

  return config;
};
