angular.module( 'ngBoilerplate.login_register', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
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

.controller( 'LoginCtrl', function ( $scope, UserService) {
		
		console.log("LoginCtrl Instancié");
		$scope.UserService = UserService;
		$scope.loginClick = function() {
			if ($scope.ConnectForm.$valid) {
				var url = $scope.email;
				console.log("Connect Form Valid ");				
				UserService.get(url).
					success(function(data) {
						var res = angular.toJson(data);
				});
			}
		};
})

.controller( 'SignCtrl', function ( $scope, $timeout, UserService ) {

		console.log("SignCtrl Instancié");
		$scope.UserService = UserService;
		$scope.signClick = function() {
			if ($scope.SignForm.$valid) {
				console.log($scope.mail);
				$scope.person.mail = "you did it";
				$scope.person.first_name = "Bravo will ! No place holder";
				$scope.person.last_name = "Encore bravo ! Place holder";
				console.log("Sign Form Valid ");
			}
			console.log("Bouton cliqué");
			
		};
})


.factory('UserService', function ($http) {
	var url = "users/sign/";
	return {
		get: function(ur) {
			return $http.get(url+ur);
		},
		post: function(ur) {
			return $http.post(url+ur);
		}
		};
	})
	
;



