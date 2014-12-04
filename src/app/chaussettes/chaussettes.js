angular.module( 'ngBoilerplate.chaussettes', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'chaussettes', {
    url: '/chaussettes',
    views: {
      "main": {
        controller: 'ChaussettesCtrl',
        templateUrl: 'chaussettes/chaussettes.tpl.html'
      }
    },
    data:{ pageTitle: 'Nos chaussettes' }
  });
})

.controller( 'ChaussettesCtrl', function ProductsCtrl( $scope ) {
})

;
