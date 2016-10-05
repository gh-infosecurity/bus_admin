var tab = require('../../tab.module');
require('./vendor.autocomplete.controller');
require('./vendor.service');

tab.controller('VendorController', ['$scope', 'VendorService', function ($scope, vendorService) {


    vendorService.getVendors(function (data) {
        $scope.vendors = data.data.vendors;
        $scope.vendor = $scope.vendors[0];
    });


    $scope.selected = [];
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