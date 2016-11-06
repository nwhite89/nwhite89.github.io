define([
    'templates/nav.tmpl.html'
], function (navTpl) {

    function nav () {
        return {
            'restrict': 'E',
            'replace': true,
            'template':  navTpl
        };
    }

    return nav;
});
