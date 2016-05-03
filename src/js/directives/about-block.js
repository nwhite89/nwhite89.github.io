define([
], function () {
    function aboutDirective () {
        return {
            'restrict': 'E',
            'replace': true,
            'templateUrl': 'tmpl/about.tmpl.html',
            'controller': 'aboutCtrl'
        };
    };

    return aboutDirective;
});
