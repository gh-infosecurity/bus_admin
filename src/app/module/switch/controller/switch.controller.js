var varSwitch = require('../switch.js');
varSwitch.controller('SwitchController', ['$scope', function ($scope) {
    $scope.data = {
        cb1: true,
        cb2: true
    };

    $scope.message = 'false';

    $scope.onChange = function (cbState) {
        $scope.message = cbState;
    };
}]);