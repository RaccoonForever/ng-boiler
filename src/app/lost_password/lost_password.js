angular.module( 'ngBoilerplate.lost_password', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'lost_password', {
    url: '/lost_password',
    views: {
      "main": {
        controller: 'LostPswdCtrl',
        templateUrl: 'lost_password/lost_password.tpl.html'
      }
    },
    data:{ pageTitle: 'Nos produits' }
  });
})

.controller( 'LostPswdCtrl', function LostPswdCtrl( $scope, LostPswdService, notification ) {
 
	$scope.send = function() {
		if($scope.RecupForm.$valid) {
			LostPswdService.get($scope.email).
				success(function(data) {
					notification.add("EMail de récupération envoyé !", 5);
				});
		}
	};
 
})



.factory('LostPswdService', function ($http) {
	var url = "users/sign";
	return {
		get: function(ur) {
			return $http.get(url+"/forgot_pswd/"+ur);
		},
		post: function() {
			return $http.post(url);
		}
		};
	})


;
