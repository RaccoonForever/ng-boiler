angular.module( 'ngBoilerplate.productpage', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'productpage', {
    url: '/productpage',
    views: {
      "main": {
        controller: 'ProductsPageCtrl',
        templateUrl: 'productpage/productpage.tpl.html'
      }
    },
    data:{ pageTitle: 'Nos produits' }
  });
})

.controller( 'ProductsPageCtrl', function ProductsPageCtrl( $scope ) {
  console.log("UseSpaceCtrl Instanci?");
        //$scope.UserService = UserService;
        $scope.product_name="Product name";
        $scope.prix = "16.99??;
        $scope.sellername = "Clerc-Gherardi";
        $scope.sellertype = "Particulier";
})



.factory('UserService', function ($http) {
	var url = "users/sign";
	return {
		get: function(ur) {
			return $http.get(url+"/show_products/"+ur);
		},
		post: function() {
			return $http.post(url);
		}
		};
	})


;
