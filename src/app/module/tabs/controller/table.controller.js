var tab = require('../tab.js');

tab.controller('TableController', ['$scope', function ($scope) {
    'use strict';

    $scope.selected = [];

    $scope.query = {
        order: 'name',
        limit: 5,
        page: 1
    };

    $scope.stations = {
        data: [
            {
                name: "Киев",
                country: "UA",
                koatu: "123456"
            }, {
                name: "Николвев",
                country: "UA",
                koatu: "123456"
            }, {
                name: "Одесса",
                country: "UA",
                koatu: "123456"
            }, {
                name: "Киев",
                country: "UA",
                koatu: "123456"
            }, {
                name: "Киев",
                country: "UA",
                koatu: "123456"
            }
        ]
    }
}]);