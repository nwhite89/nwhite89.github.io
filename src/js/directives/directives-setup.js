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
        .directive('aboutBlock', about)
        .directive('footerBlock', footer)
        .directive('getInTouchBlock', getInTouch)
        .directive('homeBlock', home)
        .directive('navBlock', nav)
        .directive('portfolioBlock', portfolio);
});
