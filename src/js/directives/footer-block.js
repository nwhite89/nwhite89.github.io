define([
], function () {

    function footer () {
        return {
            'restrict': 'E',
            'replace': true,
            'templateUrl': 'tmpl/footer.tmpl.html',
            'controller': 'footerCtrl'
        };
    }

    return footer;
});
