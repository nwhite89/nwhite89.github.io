define([
    'api/projects.js'
], function (projectsInfo) {
    function portfolioCtrl ($scope, $rootScope, $sce, lodash) {
        $scope.portfolio = true;

        $scope.projects = lodash.sortBy(projectsInfo.data, function (project) {
            return project.date;
        }, '-');

        /**
         * Display a particular project within a lightbox.
         *
         * @param  {Number} pid The ID of the project in which to display
         */
        $scope.showPortfolio = function (pid) {
            var $doc = angular.element(document);
            if (!$rootScope.lightboxOn) {
                // Allow a user to use left and right arrow in order to display the next or previous project.
                $doc.on('keydown', portfolioKeyboardNav);
            }

            $scope.portfolio = false;

            $scope.showProject = lodash.findWhere($scope.projects, {
                id: pid
            });

            $scope.projectText = $sce.trustAsHtml($scope.showProject.text);

            $rootScope.lightboxOn = true;
        };

        /**
         * Close the portfolio lightbox.
         */
        $scope.close = function () {
            $scope.portfolio = true;
            $rootScope.lightboxOn = false;

            // Ensure that we remove the arrow and escape listener
            var $doc = angular.element(document);
            $doc.off('keydown', portfolioKeyboardNav);
        };

        /**
         * Navigate through portfolio once opened.
         *
         * @param  {String} direction The direction in which to navigate (left or right).
         * @param  {Number} current   The id of the current project visible.
         * @return {Number}           The id of the new project in which to display.
         */
        $scope.portfolioNav = function (direction, current) {
            var pIndex = lodash.findIndex($scope.projects, {
                    id: current
                }),
                pid;

            if (pIndex === 0 && direction === 'left') {
                pIndex = $scope.projects.length - 1;
            } else if (pIndex === $scope.projects.length - 1 && direction === 'right') {
                pIndex = 0;
            } else if (direction === 'right') {
                pIndex++;
            } else {
                pIndex--;
            }

            pid = $scope.projects[pIndex].id;

            $scope.showPortfolio(pid);

            return pid;
        };

        /**
         * Navigate through all of the projects when being displayed within a Lightbox
         * - Left arrow will navigate left.
         * - Right arrow will navigrate right.
         * - Esc button with close the lightbox.
         *
         * @param  {Object} event The event object
         */
        function portfolioKeyboardNav (event) {
            if (event.keyCode === 39) {
                $scope.portfolioNav('right', $scope.showProject.id);
            } else if (event.keyCode === 37) {
                $scope.portfolioNav('left', $scope.showProject.id);
            } else if (event.keyCode === 27) {
                $scope.close();
            }

            // Once triggered ensure that we apply the changes to the `$rootScope` otherwise we won't display the
            // changes.
            $rootScope.$apply();
        }

        // If this scope is destroyed at any point ensure that we remove the keydown listener.
        $scope.$on('destroy', function () {
            var $doc = angular.element(document);
            $doc.off('keydown', portfolioKeyboardNav);
        });
    }

    return portfolioCtrl;
});
