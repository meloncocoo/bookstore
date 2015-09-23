'use strict';

angular.module('bookstoreApp')
	.config(function ($stateProvider) {
		$stateProvider
			.state('home', {
				parent: 'main',
				url: '/',	
				views: {
					'content': {
						template: '<h1>Home</h1>'
					}
				}
			});
	});
