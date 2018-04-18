'use strict';

exports.keys = '_1489393729180_4559';
//添加view配置
exports.view = {
    defalutViewEngine: 'nunjucks',
    mapping: {
        '.html': 'nunjucks',
    },
}

exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
}