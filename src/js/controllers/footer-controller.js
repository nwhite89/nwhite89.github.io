define([
], function () {

    function footerCtrl ($scope) {
        var date = new Date();
        $scope.year = date.getFullYear();
    }

    return footerCtrl;
});
