var tab = require('../tab.js');
require('./table.controller');
require('./autocomplete.controller');

tab.controller('TabController', ['$scope', function ($scope) {
    $scope.tab = 'Artur Tabs';
}]);