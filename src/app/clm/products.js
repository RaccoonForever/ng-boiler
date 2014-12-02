angular.module( 'ngBoilerplate.products', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'products', {
    url: '/products',
    views: {
      "main": {
        controller: 'ProductsCtrl',
        templateUrl: 'products/products.tpl.html'
      }
    },
    data:{ pageTitle: 'Nos produits' }
  });
})

.controller( 'ProductsCtrl', function ProductsCtrl( $scope ) {
})

;
