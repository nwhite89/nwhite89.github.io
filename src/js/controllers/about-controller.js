define([
], function () {
    function aboutCtrl ($scope, instagramResource) {
        $scope.instagram = null;

        instagramResource.getImages().$promise.then(function (res) {
            $scope.instagram = res.data;
        });
    }

    return aboutCtrl;
});
