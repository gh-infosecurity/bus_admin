var tab = require('../../tab.module');

tab.service("ApiService", ['$http', function ($http) {

    this.getCountries = function (handler) {
        $http({
            method: 'GET',
            url: 'http://localhost:9080/stations/countries'
        }).then(handler, function errorCallback(error) {
            console.log(error)
        });
    };

    this.getStations = function (data, handler) {
        $http({
            method: 'POST',
            url: 'http://localhost:9080/stations/stations/search',
            data: data
        }).then(handler, function errorCallback(error) {
            console.log(error)
        });
    };

}]);