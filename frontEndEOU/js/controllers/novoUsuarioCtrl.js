angular.module("listaUsers").controller("novoUsuarioCtrl", ["$scope", "usersAPI", "$location" ,  function ($scope, usersAPI, $location) {

	$scope.userForm = {};

	$scope.adicionarUsuario = function(user){
		usersAPI.saveUser(user).then(function(response)
		{
			delete $scope.user;
			$scope.userForm.$setPristine();

			$scope.mensagem1 = 'Sucesso';
			$scope.mensagem2 = 'Usuário cadastrado com sucesso'; 
					
			$scope.mostrarAlerta = true;

			$scope.switchBool = function(value) {
				$scope[value] = !$scope[value];
			};
			
		});
	};

	$scope.geoLocation = function()
	{

			navigator.geolocation.getCurrentPosition(function(position){

				$scope.$apply(function(){

					$scope.latVal  = position.coords.latitude; 
					$scope.lonVal = position.coords.longitude;

					$scope.userForm.latitude.$setViewValue(position.coords.latitude);
					$scope.userForm.longitude.$setViewValue(position.coords.longitude);
				})
				
			},
			function (error) { 
				$scope.$apply(function(){

				$scope.latVal  = "Indisponível"; 
				$scope.lonVal = "Indisponível";
	
				$scope.userForm.latitude.$setViewValue("Indisponível");
				$scope.userForm.longitude.$setViewValue("Indisponível");

				})
			});
	
		
	}

}]);