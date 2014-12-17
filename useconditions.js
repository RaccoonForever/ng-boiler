angular.module( 'ngBoilerplate.useconditions', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'useconditions', {
    url: '/useconditions',
    views: {
      "main": {
        controller: 'UseCondCtrl',
        templateUrl: 'useconditions/useconditions.tpl.html'
      }
    },
    data:{ pageTitle: 'Conditions' }
  });
})

.controller( 'UseCondCtrl', function ProductsCtrl( $scope ) {
})

;
