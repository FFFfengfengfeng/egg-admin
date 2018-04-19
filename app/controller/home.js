'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  //首页
  async index() {
    const ctx = this.ctx;
    let data = {
      active: 'index',
      title: 'FFF-首页'
    }
    await ctx.render('index.ejs', {data: data});
  }

  //html
  async hyper() {
    const ctx = this.ctx;
    let data = {
      active: 'hyper',
      title: 'FFF-HTML'
    }
    await ctx.render('hyper.ejs', {data: data});
  }

  //CSS
  async style() {
    const ctx = this.ctx;
    let data = {
      active: 'style',
      title: 'FFF-CSS'
    }
    await ctx.render('style.ejs', {data: data});
  }

  //ECMA
  async ecma() {
    const ctx = this.ctx;
    let data = {
      active: 'ecma',
      title: 'FFF-JS'
    }
    await ctx.render('ecma.ejs', {data: data});
  }
}

module.exports = HomeController;
