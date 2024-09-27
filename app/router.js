/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    // router.get('/', controller.home.index);
    // router.get('/', app.controller.home.server);
    // router.get('/', app.controller.home.client);

    router.redirect('/', '/GeoEPS');
    router.get('/GeoEPS(/.*)?', controller.home.client);
};
