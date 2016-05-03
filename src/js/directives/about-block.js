define([
    'templates/about.tmpl.html'
], function (aboutTpl) {

    function aboutDirective () {
        return {
            'restrict': 'E',
            'replace': true,
            'template': aboutTpl,
            'controller': 'aboutCtrl'
        };
    }

    return aboutDirective;
});
