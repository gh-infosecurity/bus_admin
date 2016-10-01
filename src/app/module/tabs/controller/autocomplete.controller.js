var tab = require('../tab.js');

tab.controller('AutocompleteController', ['$scope', '$timeout', '$q', '$log', function ($scope, $timeout, $q, $log) {

    $scope.simulateQuery = true;
    $scope.isDisabled = false;

    // list of `state` value/display objects
    $scope.states = loadAll();
    $scope.querySearch = querySearch;
    $scope.selectedItemChange = selectedItemChange;
    $scope.searchTextChange = searchTextChange;

    $scope.newState = newState;

    function newState(state) {
        alert("Sorry! You'll need to create a Constitution for " + state + " first!");
    }

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch(query) {
        var results = query ? $scope.states.filter(createFilterFor(query)) : $scope.states,
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

        return providers.split(/, +/g).map(function (state) {
            return {
                value: state.toLowerCase(),
                display: state
            };
        });
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);

        return function filterFn(state) {
            return (state.value.indexOf(lowercaseQuery) === 0);
        };

    }
}]);