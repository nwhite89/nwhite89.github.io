define([
    'templates/get-in-touch.tmpl.html'
], function (getInTouchTpl) {

    function getInTouch () {
        return {
            'restrict': 'E',
            'replace': true,
            'template': getInTouchTpl
        };
    }

    return getInTouch;
});
