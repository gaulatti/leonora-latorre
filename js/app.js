var condoApp = angular.module('condoApp', ['ngRoute', 'condoControllers']);

condoApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/Inicio', {
			templateUrl: 'vistas/inicio.html',
			controller: 'InicioCtrl'
		}).
		when('/Documentos', {
			templateUrl: 'vistas/documentos.html',
			controller: 'DocumentosCtrl'
		}).
		when('/Documentos/:idDocumento', {
			templateUrl: 'vistas/visor.html',
			controller: 'VisorCtrl'
		}).
		when('/QuienesSomos', {
			templateUrl: 'vistas/quienes.html',
			controller: 'QuienesSomosCtrl'
		}).
		when('/Galeria', {
			templateUrl: 'vistas/galeria.html',
			controller: 'GaleriaCtrl'
		}).
		when('/Contacto', {
			templateUrl: 'vistas/contacto.html',
			controller: 'ContactoCtrl'
		}).
		otherwise({
			redirectTo: '/Inicio'
		});
	}]);



