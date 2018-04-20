'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/hyper', controller.home.hyper);
  router.get('/style', controller.home.style);
  router.get('/ecma', controller.home.ecma);
  router.get('/details', controller.home.details);
};
