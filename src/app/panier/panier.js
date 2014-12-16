angular.module( 'ngBoilerplate.panier', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'panier', {
    url: '/panier',
    views: {
      "main": {
        controller: 'PanierCondCtrl',
        templateUrl: 'panier/panier.tpl.html'
      }
    },
    data:{ pageTitle: 'Mon panier' }
  });
})

.controller( 'PanierCondCtrl', function PanierCtrl( $scope ) {
})

;
