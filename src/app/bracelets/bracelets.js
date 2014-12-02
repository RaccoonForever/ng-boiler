angular.module( 'ngBoilerplate.bracelets', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'bracelets', {
    url: '/bracelets',
    views: {
      "main": {
        controller: 'BraceletsCtrl',
        templateUrl: 'bracelets/bracelets.tpl.html'
      }
    },
    data:{ pageTitle: 'Bracelets' }
  });
})

.controller( 'BraceletsCtrl', function ProductsCtrl( $scope ) {
})

;
