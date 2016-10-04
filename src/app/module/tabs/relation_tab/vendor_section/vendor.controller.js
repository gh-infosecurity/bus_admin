var tab = require('../../tab.module');
require('./vendor.autocomplete.controller');

tab.controller('VendorController', ['$scope', function ($scope) {


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