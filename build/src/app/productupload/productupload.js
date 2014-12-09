angular.module( 'ngBoilerplate.productupload', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'productupload', {
    url: '/productupload',
    views: {
      "main": {
        controller: 'ProdUplCtrl',
        templateUrl: 'productupload/productupload.tpl.html'
      }
    },
    data:{ pageTitle: 'Product upload' }
  });
})

.controller( 'ProdUplCtrl', function ProdUplCtrl( $scope ) {
})

;
