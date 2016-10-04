var tab = require('../tab.module.js');
//include templates
require("!ngtemplate?relativeTo=src/!html!./api_section/api.template.html");
require("!ngtemplate?relativeTo=src/!html!./vendor_section/vendor.template.html");

//include controllers
require('./api_section/api.controller');
require('./vendor_section/vendor.controller');

tab.controller('RelationController', ['$scope', function ($scope) {

}]);