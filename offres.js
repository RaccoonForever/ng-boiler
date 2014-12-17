angular.module( 'ngBoilerplate.offres', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'offres', {
    url: '/offres',
    views: {
      "main": {
        controller: 'OffresCtrl',
        templateUrl: 'offres/offres.tpl.html'
      }
    },
    data:{ pageTitle: 'Nos offres' }
  });
})

.controller( 'OffresCtrl', function OffresCtrl( $scope ) {
})

;
