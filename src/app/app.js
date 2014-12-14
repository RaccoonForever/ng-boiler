angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ngBoilerplate.products',
  'ngBoilerplate.useconditions',
  'ngBoilerplate.login_register',
  'ngBoilerplate.userspace',
  'ngBoilerplate.livraison',
  'ngBoilerplate.infoslivraison',
  'ngBoilerplate.echarpes',
  'ngBoilerplate.colliers',
  'ngBoilerplate.chaussettes',
  'ngBoilerplate.bracelets',
  'ngBoilerplate.offres',
  'ngBoilerplate.productpage',
  'ngBoilerplate.userprofile_edit',
  'ngBoilerplate.productupload',
  'notif',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run ($rootScope, $location, ServiceLog) {
	$rootScope.$on('$routeChangeStart', function (event) {
	if (!ServiceLog.isLoggedIn()) {
			console.log('DENY');
			event.preventDefault();
			$location.path('/login_register');
		}
		else {
			console.log('ALLOW');
			$location.path('/home');
		}
	
	});
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, ServiceLog) { 
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });
  
	$scope.$watch(ServiceLog.isLoggedIn, function (value, oldValue) {

	if(!value && oldValue) {
		console.log("Disconnect");
		$location.path('/login_register');
	}
	if(value) {
		console.log("Connect");
		//Do something when the user is connected
		console.log("You did it");
		//$location.path('/home');
	}

	}, true);
})

 .factory('ServiceLog', function(){
	var user;

	return{
		setUser : function(aUser){
			user = aUser;
		},
		isLoggedIn : function(){
			return(user)? user : false;
		}
	};
	})

;






