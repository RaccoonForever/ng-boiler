angular.module( 'ngBoilerplate.advance_research', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'advance_research', {
    url: '/advance_research',
    views: {
      "main": {
        controller: 'ResearchCtrl',
        templateUrl: 'advance_research/advance_research.tpl.html'
      }
    },
    data:{ pageTitle: 'Nos produits' }
  });
})

.controller( 'ResearchCtrl', 
    function ResearchCtrl($scope, filterFilter) {
    
        $scope.parentItems = [
        {
            "id": 0,
            "displayName": " - Type d'article - "
        },
        {
            "id": 1,
            "displayName": "Chaussette"
        },
        {
            "id": 2,
            "displayName": "Bracelet"
        },
        {
            "id": 3,
            "displayName": "Collier"
        },
        {
            "id": 4,
            "displayName": "Echarpe"
        }
    ];
    $scope.selectedParentItem = $scope.parentItems[0];

    $scope.childItems = [
        {
            "id": 0,
            "displayName": "- Taille -",
            "parentId": 0
        },
        {
            "id": 1,
            "displayName": "3.5 pouce pour Iphone4/4s",
            "parentId": 1
        },
        {
            "id": 2,
            "displayName": "4.5 pouce pour Iphone5/5s",
            "parentId": 1
        },
        {
            "id": 3,
            "displayName": "5.5 pouce pour Galaxy S5",
            "parentId": 1
        },
        {
            "id": 4,
            "displayName": "S",
            "parentId": 2
        },
        {
            "id": 5,
            "displayName": "M",
            "parentId": 2
        }
    ];
    $scope.filteredArray = [];
    $scope.$watch("parentId", function (newValue) {
        $scope.filteredArray = filterFilter($scope.childItems, newValue);
        $scope.selectedChildItem = $scope.filteredArray[0];
    },true);
    

    $scope.grandChildItems = [
        {
            "id": 0,
            "displayName": "grandChild0 of 00",
            "parentId": 0
        },
        {
            "id": 1,
            "displayName": "grandChild1 of 00",
            "parentId": 0
        },
        {
            "id": 2,
            "displayName": "grandChild2 of 00",
            "parentId": 0
        },
        {
            "id": 3,
            "displayName": "grandChild0 of 01",
            "parentId": 1
        },
        {
            "id": 4,
            "displayName": "grandChild1 of 01",
            "parentId": 1
        },
        {
            "id": 5,
            "displayName": "grandChild0 of 02",
            "parentId": 2
        }
    ];
    $scope.selectedGrandChildItem = $scope.grandChildItems[0];

})

;
