define([
    'templates/home.tmpl.html'
], function (homeTpl) {

    function home () {
        return {
            'restrict': 'E',
            'replace': true,
            'template': homeTpl,
            'controller': 'homeCtrl'
        };
    }

    return home;
});
