var tab = require('../../tab.module');
require('./api.service');

tab.controller('ApiController', ['$scope', 'ApiService', function ($scope, apiService) {

    $scope.locales = ['RU', 'UA', 'EN'];
    $scope.locale = $scope.locales[0];
    $scope.updateLocale = function () {
        console.log($scope.locale);
    };

    $scope.update = function () {
        console.log($scope.country);
    };

    apiService.getCountries(function (data) {
        $scope.countries = data.data.countries;
        $scope.country = $scope.countries[216];
    });

    $scope.search = function () {
        stationsData = {
            "locale": $scope.locale,
            "country_id": $scope.country.id,
            "search_name": $scope.searchName
        };

        apiService.getStations(stationsData, function (stations) {
            $scope.stationsCountries = stations.data.countries;
            $scope.stations = stations.data.stations;
        });
    };

    $scope.getCountryAlpha2 = function (country_id) {
        var alpha2 = null;
        _.each($scope.stationsCountries, (function (item) {
            if (item.id == country_id) {
                alpha2 = item;
            }
        }));
        return _.isNull(alpha2) ? '-' : alpha2.code_alpha2;
    };

    $scope.selected = [];
}]);