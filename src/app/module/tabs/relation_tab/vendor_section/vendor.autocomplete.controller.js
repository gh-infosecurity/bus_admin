var tab = require('../../tab.module');

tab.controller('VendorAutocompleteController', ['$scope', '$timeout', '$q', '$log', function ($scope, $timeout, $q, $log) {
    var state = $scope.state = '';

    $scope.simulateQuery = true;
    $scope.isDisabled = true;

    // list of `vendor` value/display objects
    $scope.vendors = loadAll();
    $scope.querySearch = querySearch;
    $scope.selectedItemChange = selectedItemChange;
    $scope.searchTextChange = searchTextChange;
    $scope.newvendor = newvendor;

    $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function (state) {
        return {display: state};
    });

    $scope.update = function () {
        state = $scope.state;
        console.log($scope.state);
        $scope.isDisabled = false;
    };

    function newvendor(vendor) {
        alert("Sorry! You'll need to create a Constitution for " + vendor + " first!");
    }

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for vendors... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch(query) {
        var results = query ? $scope.vendors.filter(createFilterFor(query)) : $scope.vendors,
            deferred;
        if ($scope.simulateQuery) {
            deferred = $q.defer();
            $timeout(function () {
                deferred.resolve(results);
            }, Math.random() * 1000, false);
            return deferred.promise;
        } else {
            return results;
        }
    }

    function searchTextChange(text) {
        $log.info('Text changed to ' + text);
    }

    function selectedItemChange(item) {
        $log.info('Item changed to ' + JSON.stringify(item));
    }


    function loadAll() {
        var providers = 'Argest, VPI, BusFor, InfoBus, DOPAS, CHOPAS, ZOPAS';

        return providers.split(/, +/g).map(function (vendor) {
            return {
                value: vendor.toLowerCase(),
                display: vendor
            };
        });
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);

        return function filterFn(vendor) {
            return (vendor.value.indexOf(lowercaseQuery) === 0);
        };

    }
}]);