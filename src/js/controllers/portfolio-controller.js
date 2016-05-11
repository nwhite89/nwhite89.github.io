define([
    'api/projects.js'
], function (projectsInfo) {
    function portfolioCtrl ($scope, $sce, lodash) {
        $scope.portfolio = true;
        $scope.projects = projectsInfo.data;

        $scope.showPortfolio = function (pid) {
            $scope.portfolio = false;

            $scope.showProject = lodash.findWhere($scope.projects, {
                id: pid
            });

            $scope.projectText = $sce.trustAsHtml($scope.showProject.text);
        };

        $scope.close = function () {
            $scope.portfolio = true;
        };
    }

    return portfolioCtrl;
});
