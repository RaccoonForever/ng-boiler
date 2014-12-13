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
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location) { 
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });
})

;






