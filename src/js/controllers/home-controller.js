define([
    'api/working-on.json'
], function (workingOnJson) {
    function homeCtrl ($scope) {
        $scope.workingAt = {
            'title': 'Scoota',
            'text': '@scoota',
            'link': 'http://scoota.com'
        };

        $scope.workingWith =  workingOnJson;
    }

    return homeCtrl;
});
