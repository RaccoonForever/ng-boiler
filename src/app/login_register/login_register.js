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

.controller( 'LoginCtrl', function ( $scope, UserService, UserService2, $resource) {
		
		console.log("LoginCtrl Instancié");
		$scope.UserService = UserService;
		$scope.loginClick = function() {
			if ($scope.ConnectForm.$valid) {
				var url = $scope.email;
				console.log("Connect Form Valid ");
				UserService.get(url).
					success(function(data) {
						var res = angular.toJson(data);
						console.log(res);
					});
				var resService2 = UserService2.get({mail: $scope.email});
				resService2.$promise.then( function(result) {
					console.log(result);
				});
				
				
				
			}
		};
})

.controller( 'SignCtrl', function ( $scope, $timeout, UserService, UserService2, $resource ) {

		console.log("SignCtrl Instancié");
		$scope.UserService = UserService;
		$scope.signClick = function() {
			if ($scope.SignForm.$valid) {
				console.log($scope.users.mail);
				/*UserService.post($scope.users).
					success( function(data) {
						var res = angular.toJson(data);
						console.log("Service HTTP : "res);
					});*/
				var resService3 = UserService2.post($scope.users);
				resService3.$promise.then( function(result) {
					console.log("POST USERS RESSOURCE");
					console.log(result);
				});
				
				var resService2 = $resource('http://localhost:8080/ecom/users/sign/find/:mail').get({mail: $scope.users.mail});
				resService2.$promise.then( function(result) {
					console.log("GET USERS RESSOURCE : ");
					console.log(angular.toJson(result));
				});
				
				var resService1 = UserService2.get({mail: $scope.users.mail});
				resService1.$promise.then( function(result) {
					console.log("GET STRING RESSOURCE : ");
					console.log(result);
				});
				
				
				
			}
			console.log("Bouton cliqué");
			
		};
})


.factory('UserService', function ($http) {
	var url = "users/sign";
	return {
		get: function(ur) {
			return $http.get(url+"/"+ur);
		},
		post: function() {
			return $http.post(url);
		}
		};
	})
	
.factory('UserService2', function ($resource) {
	return $resource('http://localhost:8080/ecom/users/sign/:mail', {}, {
		get: { method: 'GET', params: {mail: '@mail'} },
		update: { method: 'PUT', params: {mail: '@mail'} },
		post: { method: 'POST' },
		del: { method: 'DELETE', params: {mail: '@mail'} }
    });
})

;



