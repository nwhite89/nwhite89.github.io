define([
], function () {

    function nav () {
        return {
            'restrict': 'E',
            'replace': true,
            'templateUrl':  'tmpl/nav.tmpl.html'
        };
    }

    return nav;
});
