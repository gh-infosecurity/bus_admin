var tab = require('../../../tab.module.js');
require('./../api.service.js');

tab.controller('ToggleController', ['$scope', '$mdSidenav', '$mdComponentRegistry', 'ApiService', function ($scope, $mdSidenav, $mdComponentRegistry, apiService) {
    const Slidenav = {
        COMPONENT_ID: 'left',
        SAVE: {
            HEADER: 'Добавление новой станции:',
            BUTTON: 'Добавить'
        },
        UPDATE: {
            HEADER: 'Редактирование станции:',
            BUTTON: 'Редактировать'
        },
        SIZE: {
            CLOSE: 50,
            OPEN: 670
        }
    };


    $scope.country = null;
    $scope.operation = null;
    $scope.station = {};

    $mdComponentRegistry.when(Slidenav.COMPONENT_ID).then(function () {
        $scope.navSize = Slidenav.SIZE.CLOSE;

        $mdSidenav(Slidenav.COMPONENT_ID).onClose(function () {
            $scope.navSize = Slidenav.SIZE.CLOSE;
        });
    });

    $scope.addStation = function () {
        $scope.navSize = $scope.navSize = Slidenav.SIZE.OPEN;
        $scope.operation = Slidenav.SAVE;
        $mdSidenav(Slidenav.COMPONENT_ID).open();
    };

    $scope.updateStation = function () {
        $scope.navSize = $scope.navSize = Slidenav.SIZE.OPEN;
        $scope.operation = Slidenav.UPDATE;
        $scope.station = _.first($scope.selected);
        $scope.country = _.first(_.filter($scope.countries, function (country) {
            return country.id == $scope.station.countryId;
        }));

        $mdSidenav(Slidenav.COMPONENT_ID).open();
    };

    $scope.saveOrUpdateStation = function () {
        var operation = $scope.operation;
        if (!_.isNull(operation)) {
            if (operation === Slidenav.SAVE) {
                apiService.addStation({
                    station: $scope.station
                });
            } else {
                apiService.updateStation({
                    station: $scope.station
                });
            }
        } else {
            console.log('operation Error !')
        }
        $mdSidenav(Slidenav.COMPONENT_ID).close();
    };

    $scope.deleteStation = function () {
        var selected = $scope.selected;
        if (!_.isEmpty(selected)) {
            apiService.deleteStation(_.first(selected).id);
        }
    };
}]);