(function () {
'use strict';

angular.module('MenuApp')
.component('shoppingList', {
  templateUrl: 'shoppinglist.template.html',
  bindings: {
    items: '<'
  }
});

})();
