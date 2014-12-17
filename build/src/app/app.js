angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ngBoilerplate.products',
  'ngBoilerplate.useconditions',
  'ngBoilerplate.expeditionconditions',
  'ngBoilerplate.legalinformation',
  'ngBoilerplate.contactus',
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
  /*'ngBoilerplate.translation',*/
  'ngBoilerplate.productupload',
  'ngBoilerplate.advance_research',
  'ngBoilerplate.search_result',
  'ngBoilerplate.lost_password',
  'ngBoilerplate.panier',
  'notif',
  'validation.match',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise( '/home' );
    
})



.run( function run ($rootScope, $location, ServiceLog) {
	$rootScope.$on('$routeChangeStart', function (event) {
	console.log("routechange");
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
  
	$scope.ServiceLog = ServiceLog;
  
	$scope.$watch(ServiceLog.isLoggedIn, function (value, oldValue ) {

	if(!value && oldValue) {
		console.log("Disconnect");
		$location.path('/login_register');
	}
	if(value) {
		console.log("Connect");
		//Do something when the user is connected
		console.log("You did it");
		
		$location.path('/home');
	}

	}, true);
})

.directive('equals', function () {
	return {
	restrict: 'A', // only activate on element attribute
	require: '?ngModel', // get a hold of NgModelController
	link: function(scope, elem, attrs, ngModel) {
		if(!ngModel) {return;} // do nothing if no ng-model

      // watch own value and re-validate on change
		scope.$watch(attrs.ngModel, function() {
			validate();
	});

      // observe the other value and re-validate on change
		attrs.$observe('equals', function (val) {
			validate();
	});

		var validate = function() {
        // values
		var val1 = ngModel.$viewValue;
		var val2 = attrs.equals;

        // set validity
		ngModel.$setValidity('equals', ! val1 || ! val2 || val1 === val2);
		

      };
    }
  };
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






