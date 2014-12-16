angular.module( 'ngBoilerplate.search_result', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'search_result', {
    url: '/search_result',
    views: {
      "main": {
        controller: 'OffresCtrl',
        templateUrl: 'search_result/search_result.tpl.html'
      }
    },
    data:{ pageTitle: 'Nos offres' }
  });
})

.controller( 'OffresCtrl', function OffresCtrl( $scope ) {
})

;
