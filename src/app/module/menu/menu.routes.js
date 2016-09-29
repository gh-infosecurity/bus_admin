require('./controller/menu.controller');

var menu = require('../menu/menu');

menu.config(['$routeSegmentProvider', function ($routeSegmentProvider) {
    $routeSegmentProvider.when('/menu', 'root')
        .segment("root", {
            controller: "MenuController",
            template: require('./template/menu.html'),
        });
}]);