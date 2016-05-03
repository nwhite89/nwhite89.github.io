define([
], function () {
    function projectResource ($resource) {
        return $resource('api/projects.json', {});
    }

    return projectResource;
});
