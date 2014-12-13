angular.module( 'ngBoilerplate.userprofile_edit', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'userprofile_edit', {
    url: '/userprofile_edit',
    views: {
      "main": {
        controller: 'UseEditCtrl',
        templateUrl: 'userprofile_edit/userprofile_edit.tpl.html'
      }
    },
    data:{ pageTitle: 'User Edit' }
  });
})

.controller( 'UseEditCtrl', function ProductsCtrl( $scope ) {
})

;
