angular.module( 'ngBoilerplate.advance_research', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'advance_research', {
    url: '/advance_research',
    views: {
      "main": {
        controller: 'ProductsCtrl',
        templateUrl: 'advance_research/advance_research.tpl.html'
      }
    },
    data:{ pageTitle: 'Nos produits' }
  });
})

.controller( 'ProductsCtrl', function ProductsCtrl( $scope ) {
})

;
