require('./controller/switch.controller');

var varSwitch = require('../switch/switch');

varSwitch.config(['$routeSegmentProvider', function ($routeSegmentProvider) {
    $routeSegmentProvider.when('/switch', 'switch')
        .segment("switch", {
            controller: "SwitchController",
            template: require('./template/switch.html'),
        });
}]);