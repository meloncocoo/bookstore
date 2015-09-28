'use strict';

angular.module('bookstoreApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                parent: 'site',
                url: '/',
                data: {
                    roles: []
                },
                views: {
										'content@navbar': {
											templateUrl: 'scripts/components/navbar/navbar.html',
											controller: 'NavbarController'
										},
										'content@': {
											templateUrl: 'scripts/app/main/main.html',
											controller: 'MainController'
										}
                },
                resolve: {
                   mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {                        $translatePartialLoader.addPart('main');
                        return $translate.refresh();
                    }]
                }
            });
    });
