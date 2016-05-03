define([
], function () {
    function workingOn ($resource) {
        return $resource('api/working-on.json', {});
    }

    return workingOn;
});
