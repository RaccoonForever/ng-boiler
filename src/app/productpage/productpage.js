angular.module( 'ngBoilerplate.productpage', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'productpage', {
    url: '/productpage',
    views: {
      "main": {
        controller: 'ProductsCtrl',
        templateUrl: 'productpage/productpage.tpl.html'
      }
    },
    data:{ pageTitle: 'Nos produits' }
  });
})

.controller( 'ProductsCtrl', function ProductsCtrl( $scope ) {
})

;
