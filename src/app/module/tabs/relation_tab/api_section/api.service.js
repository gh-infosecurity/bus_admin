var tab = require('../../tab.module');

tab.service("ApiService", ['$http', function ($http) {

    this.getCountries = function (handler) {
        $http.get('http://localhost:9080/stations/countries')
            .then(handler, function errorCallback(error) {
                console.log(error)
            });
    };

    this.getStations = function (data, handler) {
        data.chameleonSession = '12345678912345678912';
        $http.post('http://localhost:9080/stations/stations/search', data)
            .then(handler, function errorCallback(error) {
                console.log(error)
            });
    };

    this.addStation = function (data, handler) {
        data.chameleonSession = '12345678912345678912';
        $http.post('http://localhost:9080/stations/stations', data)
            .then(handler, function errorCallback(error) {
                console.log(error)
            });
    };

    this.updateStation = function (data, handler) {
        data.chameleonSession = '12345678912345678912';
        $http.put('http://localhost:9080/stations/stations', data)
            .then(handler, function errorCallback(error) {
                console.log(error)
            });
    };

    this.deleteStation = function (id, handler) {
        $http.delete('http://localhost:9080/stations/stations/' + id)
            .then(handler, function errorCallback(error) {
                console.log(error)
            });
    };

}]);