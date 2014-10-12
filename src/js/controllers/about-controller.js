angular
    .module('app.controllers')
    .controller('aboutCtrl', function ($scope, instagramResource) {
        $scope.instagram = null;

        instagramResource.getImages().$promise.then(function (res) {
            $scope.instagram = res.data;
        });
    });
