define([
    'templates/portfolio.tmpl.html'
], function (portfolioTpl) {

    function portfolio () {
        return {
            'restrict': 'E',
            'replace': true,
            'template': portfolioTpl,
            'controller': 'portfolioCtrl'
        };
    }

    return portfolio;
});
