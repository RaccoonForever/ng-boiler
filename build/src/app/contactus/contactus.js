angular.module( 'ngBoilerplate.contactus', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'contactus', {
    url: '/contactus',
    views: {
      "main": {
        controller: 'ContactusCondCtrl',
        templateUrl: 'contactus/contactus.tpl.html'
      }
    },
    data:{ pageTitle: 'Nous contacter' }
  });
})

.controller( 'ContactusCondCtrl', function ContactusCtrl( $scope ) {
})

;
