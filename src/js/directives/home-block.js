define([
], function () {
    function home () {
        return {
            'restrict': 'E',
            'replace': true,
            'templateUrl': 'tmpl/home.tmpl.html',
            'controller': 'homeCtrl'
        };
    }

    return home;
});
