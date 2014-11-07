'use strict';

/* App module */
var portfolioApp = angular.module('portfolioApp', [
	'ngRoute',
	'portfolioNavigation',
	'portfolioAccueil',
	'portfolioProjets',
	'portfolioContact'
]);

/* Router */
portfolioApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/accueil', {
			templateUrl: 'app/accueil/accueil.html',
			controller: 'AccueilCtrl',
			title: 'Accueil'
		}).
		when('/projets', {
			templateUrl: 'app/projets/projets.html',
			controller: 'ProjetsCtrl',
			title: 'Projets'
		}).
		when('/contact', {
			templateUrl: 'app/contact/contact.html',
			controller: 'ContactCtrl',
			title: 'Contact'
		}).
		otherwise({
			redirectTo: '/accueil'
		});
}]);

/* Change title dynamically with routes */
portfolioApp.run(['$rootScope', function($rootScope) {
	$rootScope.$on('$routeChangeSuccess', function(event, currentRoute, previousRoute) {
			$rootScope.title = currentRoute.title;
	});
}]);