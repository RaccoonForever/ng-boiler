angular.module( 'ngBoilerplate.legalinformation', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'legalinformation', {
    url: '/legalinformation',
    views: {
      "main": {
        controller: 'LegalCondCtrl',
        templateUrl: 'legalinformation/legalinformation.tpl.html'
      }
    },
    data:{ pageTitle: 'Mentions légales' }
  });
})

.controller( 'LegalCondCtrl', function ProductsCtrl( $scope ) {
})

;
