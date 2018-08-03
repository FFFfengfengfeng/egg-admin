'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
    async index() {
        const { ctx } = this;

        return ctx.body = await ctx.service.news.create();
    }
}
module.exports = NewsController;
