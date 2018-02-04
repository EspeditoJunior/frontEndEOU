angular.module("listaUsers").config(function ($routeProvider, $locationProvider){
	
	$locationProvider.hashPrefix('');

	$routeProvider.when('/user', {
		templateUrl: 'view/listaUsers.html',
		controller: 'userCtrl',
		resolve: {
			users: function (usersAPI) {
				return usersAPI.getUsers();
			}
		}
	});

	$routeProvider.when('/novoUsuario', {
		templateUrl: 'view/novoUsuario.html',
		controller: 'novoUsuarioCtrl'
	});

	$routeProvider.when('/uploadCSV', {
		templateUrl: 'view/uploadCSV.html',
		controller: 'uploadCtrl'
	});

    	
	$routeProvider.otherwise({redirectTo: "/user"});

});