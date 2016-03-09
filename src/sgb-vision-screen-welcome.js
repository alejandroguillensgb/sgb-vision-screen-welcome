'use strict';

angular.module('sgb-vision-screen-welcome', ['megazord'])
    .controller('sgb-vision-screen-welcome-controller', ['$scope', '_router', '_screen', '_screenParams', '$timeout',
        function ($scope, _router, _screen, _screenParams, $timeout) {
        _screen.initialize($scope, _screenParams);

        $scope.appear = false;

        $timeout(function(){
            $scope.appear = true;
        }, 1000);

        $timeout(function(){
            _router.fireEvent({
                name: "goToMain"
            });
        }, 3000);

    }]);