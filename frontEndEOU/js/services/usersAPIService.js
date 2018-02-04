angular.module("listaUsers").factory("usersAPI", function ($http, config){

	var _getUsers = function () {
		return $http.get(config.baseUrl + "/user");
	};


	var _saveUser = function (user) {
		return $http.post(config.baseUrl + "/user",user);
	};
	
	var _uploadCSV = function (arquivo) {

		var fd = new FormData();
		fd.append("listaUsuarios", arquivo[0]);


		return $http.post(config.baseUrl + "/user/upload/csv", fd, {
			headers: {'Content-Type': undefined },
			transformRequest: angular.identity
		}).then(function(response){return response}).catch(function(response){return response});
		

		//return $http.post(config.baseUrl + "/user/upload/csv",arquivo);
	};

	return {
		getUsers: _getUsers,
		saveUser: _saveUser,
		uploadCSV: _uploadCSV
	};

});