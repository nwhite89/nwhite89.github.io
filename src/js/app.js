define([
    'ng-lodash',
    './filters/filters-setup',
    './directives/directives-setup',
    './resources/resources-setup',
    './controllers/controllers-setup',
    '../sass/template.scss'
], function (ngLodash, filtersSetup, directivesSetup, resourcesSetup, controllersSetup) {
    // Setup project
    angular
        .module('app', [
            'ngLodash',
            // 'app.templates',
            filtersSetup.name,
            directivesSetup.name,
            resourcesSetup.name,
            controllersSetup.name
        ]);
});
