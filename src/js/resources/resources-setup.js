define([
    './instagram-resource',
    'angular-resource'
], function (instagram, ngResource) {

    return angular
        .module('app.resources', [
            'ngResource'
        ])
        .factory('instagramResource', instagram);
});
