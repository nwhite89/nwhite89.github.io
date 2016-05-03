define([
], function () {
    function homeCtrl ($scope, workingOnResource) {
        $scope.workingAt = {
            'title': 'Scoota',
            'text': '@scoota',
            'link': 'http://scoota.com'
        };

        $scope.workingWith =  workingOnResource.query();
    }

    return homeCtrl;
});
