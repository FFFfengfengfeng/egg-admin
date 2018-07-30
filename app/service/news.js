'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
    async create() {
        const { ctx } = this;

        const result = ctx.model.News.create({
            title: '2222',
            content: '33333'
        });

        if (result) {
            return 'OK';
        }
    }

}

module.exports = NewsService;