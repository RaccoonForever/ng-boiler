angular.module( 'ngBoilerplate.livraison', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'livraison', {
    url: '/livraison',
    views: {
      "main": {
        controller: 'LivCtrl',
        templateUrl: 'livraison/livraison.tpl.html'
      }
    },
    data:{ pageTitle: 'Livraison' }
  });
})

.controller( 'LivCtrl', function ProductsCtrl( $scope ) {
})

;
