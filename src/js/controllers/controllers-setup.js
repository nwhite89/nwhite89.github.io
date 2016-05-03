define([
    './about-controller',
    './footer-controller',
    './home-controller',
    './portfolio-controller'
], function (about, footer, home, portfolio) {
    return angular
        .module('app.controllers', [])
        .controller('aboutCtrl', about)
        .controller('footerCtrl', footer)
        .controller('homeCtrl', home)
        .controller('portfolioCtrl', portfolio);
});
