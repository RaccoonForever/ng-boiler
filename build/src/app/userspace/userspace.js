angular.module( 'ngBoilerplate.userspace', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'ngResource'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'userspace', {
    url: '/userspace',
    views: {
      "main": {
        controller: 'UseSpaceCtrl',
        templateUrl: 'userspace/userspace.tpl.html'
      }
    },
    data:{ pageTitle: 'User Space' }
  });
})

.controller( 'UseSpaceCtrl', function UseSpaceCtrl( $scope, UserService ) {
    
    console.log("UseSpaceCtrl Instancié");
        //$scope.UserService = UserService;
        $scope.firstname = "Arthur";
        $scope.lastname = "Clerc-Gherardi";
        $scope.numphone = "06-99-05-00-10";
        $scope.email = "acg@gmail.com";
        $scope.adress="2 rue Catane 38000 GRENOBLE";
        /*
        var user = UserService.get();
        $scope.firstname = user.fNameU;
        $scope.lastname = user.lNameU;
        $scope.numphone = user.phoneU;
        $scope.email = user.mailU;
        $scope.adress = user.adressU;
        */
                
       
    
})

.factory('UserService', function ($http) {
	var url = "users/sign";
	return {
		get: function(ur) {
			return $http.get(url+"/find_user_by_email/"+ur);
		},
		getUserExist : function(ur){
			return $http.get(url+"/find/"+ur);
		},
		post: function() {
			return $http.post(url);
		}
		};
	});
