define([
    './about-block',
    './footer-block',
    './get-in-touch-block',
    './home-block',
    './nav-block',
    './portfolio-block'
], function (about, footer, getInTouch, home, nav, portfolio) {

    return angular
        .module('app.directives', [])
        .directive('about-block', about)
        .directive('footer-block', footer)
        .directive('get-in-touch-block', getInTouch)
        .directive('home-block', home)
        .directive('nav-block', nav)
        .directive('portfolio-block', portfolio);
});
