require('./routes');
require('angular-route-segment');
require('angular-route');
require('angular-material');

require('./tabs/tab.module');

module.exports = angular.module('busAdmin', [
    'ngAnimate',
    'ngMaterial',
    'md.data.table',
    'ngRoute',
    'route-segment',
    'view-segment',
    'tabs'
]);