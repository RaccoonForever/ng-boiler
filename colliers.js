angular.module( 'ngBoilerplate.colliers', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'colliers', {
    url: '/colliers',
    views: {
      "main": {
        controller: 'ColliersCtrl',
        templateUrl: 'colliers/colliers.tpl.html'
      }
    },
    data:{ pageTitle: 'Nos colliers' }
  });
})

.controller( 'ColliersCtrl', function ProductsCtrl( $scope ) {
})

;
