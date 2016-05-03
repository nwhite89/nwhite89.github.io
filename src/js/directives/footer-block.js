define([
    'templates/footer.tmpl.html'
], function (footerTpl) {

    function footer () {
        return {
            'restrict': 'E',
            'replace': true,
            'template': footerTpl,
            'controller': 'footerCtrl'
        };
    }

    return footer;
});
