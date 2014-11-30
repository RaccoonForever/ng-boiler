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
        controller: 'LogRegCtrl',
        templateUrl: 'login_register/login_register.tpl.html'
      }
    },
    data:{ pageTitle: 'Login or Register' }
  });
})

.controller( 'LogRegCtrl', function ProductsCtrl( $scope ) {
})

;
