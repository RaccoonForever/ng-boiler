angular.module( 'ngBoilerplate.login_register', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'ngResource'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'login_register', {
    url: '/login_register',
    views: {
      "main": {
        templateUrl: 'login_register/login_register.tpl.html'
      }
    },
    data:{ pageTitle: 'Login or Register' }
  });
})

.controller( 'LoginCtrl', function ( $scope, UserService, ServiceLog, notification) {
		
		console.log("LoginCtrl Instancié");
		$scope.UserService = UserService;
		$scope.loginClick = function() {
			if ($scope.ConnectForm.$valid) {
				var url = $scope.email;
				console.log("Connect Form Valid ");
				//console.log(url);
				//console.log($scope.mdp);
				
				var res = checkMail(url, $scope.mdp,UserService,ServiceLog, notification);
				
				
				/* EXEMPLE UTILISATION GET avec NGRESOURCE
				var resService2 = UserService2.get({mail: $scope.email});
				resService2.$promise.then( function(result) {
					console.log(result);
				});*/
			}
		};
})

.controller( 'SignCtrl', function ( $scope, UserService, UserService2, ServiceLog ) {

		console.log("SignCtrl Instancié");
		$scope.UserService = UserService;
		$scope.signClick = function() {
			if ($scope.SignForm.$valid) {
				console.log($scope.users.mailU);
				signIn($scope.users.mailU, $scope.users, UserService, UserService2);
			}
		};
})


.factory('UserService', function ($http) {
	var url = "https://localhost:8181/ecom/users/sign";
	return {
		get: function(ur,mdp) {
			console.log(ur+"   "+mdp);
			return $http.get(url+"/"+ur+"/"+mdp);
		},
		getUserExist : function(ur){
			return $http.get(url+"/find/"+ur);
		},
		post: function() {
			return $http.post(url);
		}
		};
	})
	
.factory('UserService2', function ($resource) {
	return $resource('https://localhost:8181/ecom/users/sign/:mail', {}, {
		get: { method: 'GET', params: {mail: '@mail'} },
		update: { method: 'PUT', params: {mail: '@mail'} },
		post: { method: 'POST' }, 
		del: { method: 'DELETE', params: {mail: '@mail'} }
    });
});

function checkMail(url, mdp, service, ServiceLog, notification){
	service.get(url,mdp).
		success(function(data) {
			var res = angular.toJson(data); 
			//console.log(res);
			if (res.localeCompare("\"true\"") === 0)
				{
					console.log("MAIL + MDP ACCORDING");
					ServiceLog.setUser(url);
					notification.add("Logged IN", 5);
					return 1;
				}
			else 
				{	console.log("MAIL + MDP NOT ACCORDING");
					return 0;
				}  
		}).
		error(function(data, status, headers, config) {
			console.log("Error get http checkMail");
			return -1; 
		});
}

function signIn(url, users, serviceHTTP, serviceRessource){
	serviceHTTP.getUserExist(url).
		success(function(data) {
			var res = angular.toJson(data);
			console.log("Resultat comparaison : " +res);
			if (res.localeCompare("\"true\"") === 0) {
				// User already exists
				return -1;
			} else {
				//Let's post the user to the BD
				serviceRessource.post(users).$promise.then( function(result) {
					console.log("POST USERS RESSOURCE");
					console.log(result);
				});
				return 1;
			}
		});
}



