'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;

        await ctx.render('layout.ejs', {
            data: 'haha'
        })
    }
}

module.exports = HomeController;
