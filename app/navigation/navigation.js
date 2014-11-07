'use strict';

/* Navigation module */
var portfolioNavigation = angular.module('portfolioNavigation', []);

/* Navigation controller */
portfolioNavigation.controller('NavCtrl', ['$scope', '$location',
	function($scope, $location) {
		// TODO: récupérer les menu en json
		$scope.items = [
			{path: '/accueil', title: 'Accueil'},
			{path: '/projets', title: 'Projets'},
			{path: '/contact', title: 'Contact'}
		];

		$scope.isActive = function(item) {
			if (item.path == $location.path()) {
				return true;
			}
			return false;
		};
	}
]);