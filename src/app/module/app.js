require('./routes');
require('angular-route-segment');
require('angular-route');
require('angular-material');

require('./menu/menu');
require('./tabs/tab');
require('./switch/switch');

module.exports = angular.module('busAdmin', [
    'ngAnimate',
    'ngMaterial',
    'ngRoute',
    'route-segment',
    'view-segment',
    'menu',
    'tabs',
    'switch'
]);