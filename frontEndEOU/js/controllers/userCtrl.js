angular.module("listaUsers").controller("userCtrl", ["$scope", "$q","users", function($scope, $q, users) {
			
	$scope.app = "Lista de usuarios";

	$scope.users = users.data;

}]);