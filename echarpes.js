angular.module( 'ngBoilerplate.echarpes', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'echarpes', {
    url: '/echarpes',
    views: {
      "main": {
        controller: 'EcharpesCtrl',
        templateUrl: 'echarpes/echarpes.tpl.html'
      }
    },
    data:{ pageTitle: 'Nos echarpes' }
  });
})

.controller( 'EcharpesCtrl', function ProductsCtrl( $scope ) {
})

;
