angular.module( 'ngBoilerplate.userspace', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
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

.controller( 'UseSpaceCtrl', function ProductsCtrl( $scope ) {
})

;
