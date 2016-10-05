var tab = require('../../tab.module');

tab.service("VendorService", ['$http', function ($http) {

    this.getVendors = function (handler) {
        $http({
            method: 'GET',
            url: 'http://localhost:9080/stations/vendors'
        }).then(handler, function errorCallback(error) {
            console.log(error)
        });
    };

}]);