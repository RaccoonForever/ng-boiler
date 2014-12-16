angular.module( 'ngBoilerplate.expeditionconditions', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'expeditionconditions', {
    url: '/expeditionconditions',
    views: {
      "main": {
        controller: 'ExpeditionCondCtrl',
        templateUrl: 'expeditionconditions/expeditionconditions.tpl.html'
      }
    },
    data:{ pageTitle: 'Conditions' }
  });
})

.controller( 'ExpeditionCondCtrl', function ProductsCtrl( $scope ) {
})

;
