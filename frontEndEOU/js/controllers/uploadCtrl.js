angular.module("listaUsers").controller("uploadCtrl", ["$scope", "usersAPI", "$location" ,  function ($scope, usersAPI, $location) {
			

	$scope.uploadCSV = function(arquivo){

		usersAPI.uploadCSV(arquivo).then(function(response)
		{
		
			$scope.uploadForm.$setPristine();
			
			var retorno = response.data;

			for (var key in retorno) {
				$scope.mensagem1 = key;
				$scope.mensagem2 = retorno[key]; 
			}

			$scope.mostrarAlerta = true;

			$scope.switchBool = function(value) {
				$scope[value] = !$scope[value];
			};

		});
	};

}]);