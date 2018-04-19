'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  //首页
  async index() {
    const ctx = this.ctx;
    await ctx.render('index.ejs', {data: 'hello world!'});
  }
}

module.exports = HomeController;
