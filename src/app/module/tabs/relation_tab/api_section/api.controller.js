var tab = require('../../tab.module');
require('./api.service');

//include templates
require("!ngtemplate?relativeTo=src/!html!./toggle/toggle.template.html");

//include controllers
require('./toggle/toggle.controller');

tab.controller('ApiController', ['$scope', 'ApiService', function ($scope, apiService) {
    $scope.stationReq = {};
    $scope.locales = ['RU', 'UA', 'EN'];

    $scope.setCountryId = function (country) {
        $scope.stationReq.countryId = country.id;
    };

    $scope.search = function () {
        $scope.selected = [];
        apiService.getStations($scope.stationReq, function (stations) {
            $scope.stationsCountries = stations.data.countries;
            $scope.stations = stations.data.stations;
        });
    };

    $scope.getCountryAlpha2 = function (countryId) {
        var alpha2 = null;
        _.each($scope.stationsCountries, (function (item) {
            if (item.id == countryId) {
                alpha2 = item;
            }
        }));
        return _.isNull(alpha2) ? '-' : alpha2.codeAlpha2;
    };

    $scope.selected = [];

}]).controller('CountryAutocompleteController', ['$scope', '$rootScope', 'ApiService', function ($scope, $rootScope, apiService) {
    $scope.searchText = null;
    $scope.selectedItem = null;
    //add Countries to RootScope
    apiService.getCountries(function (data) {
        $rootScope.countries = data.data.countries;
    });

    $scope.onChange = function () {
        var country = $scope.selectedItem;
        if (!_.isNull(country)) {
            $scope.setCountryId(country);
        }
    };

    $scope.querySearch = function () {
        var searchText = $scope.searchText;
        return _.isNull(searchText) ? $scope.countries : _.filter($scope.countries, createFilterFor(searchText));
    };

    function createFilterFor(query) {
        return function filterFn(country) {
            return (angular.lowercase(country.name).indexOf(angular.lowercase(query)) === 0);
        };
    }
}]);