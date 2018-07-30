'use strict';

// had enabled by egg
// exports.static = true;

exports.sequelize = {
    enable: true,
    package: 'egg-sequelize'
}

// 开启cors插件
exports.cors = {
    enable: true,
    package: 'egg-cors',
}
