define([
    './instagram-resource',
    './projects-resource',
    './working-on-resource',
    'angular-resource'
], function (instagram, projects, workingOn, ngResource) {

    return angular
        .module('app.resources', [
            'ngResource'
        ])
        .factory('instagramResource', instagram)
        .factory('projectsResource', projects)
        .factory('workingOnResource', workingOn);
});
