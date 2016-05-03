define([
], function () {
    function portfolio () {
        return {
            'restrict': 'E',
            'replace': true,
            'templateUrl': 'tmpl/portfolio.tmpl.html',
            'controller': 'portfolioCtrl'
        };
    }

    return portfolio;
});
