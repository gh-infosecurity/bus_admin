var tab = require('./tab.module.js');

//include templates
require("!ngtemplate?relativeTo=src/!html!./relation_tab/relation.html");

//include controllers
require('./relation_tab/relation.controller');


tab.controller('TabController', ['$scope', function ($scope) {
    $scope.tab = 'Artur Tabs';
}]);