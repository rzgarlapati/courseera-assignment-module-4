(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'home.template.html'
  })

  // Premade list page
  .state('mainList', {
    url: '/main-list',
    templateUrl: 'main-shoppinglist.template.html',
    controller: 'MainShoppingListController as mainList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('mainList.itemDetail', {
     url: '/item-detail/{category}',
    templateUrl: 'itemdetail.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
      items: ['MenuDataService','$stateParams' ,function (MenuDataService,$stateParams) {
        return MenuDataService.getItemsForCategory($stateParams.category);
      }]
    }
  });




}

})();
