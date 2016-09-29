require('./controller/tab.controller');

var tab = require('../tabs/tab');

tab.config(['$routeSegmentProvider', function ($routeSegmentProvider) {
    $routeSegmentProvider.when('/tab', 'tab')
        .segment("tab", {
            controller: 'TabController',
            template: require('./template/tab.html'),
        });
}]);