require('./tab.controller.js');

var tab = require('./tab.module');

tab.config(['$routeSegmentProvider', function ($routeSegmentProvider) {
    $routeSegmentProvider.when('/', 'tab')
        .segment("tab", {
            controller: 'TabController',
            template: require('./tab.html')
        });
}]);