(function () {
'use strict';

angular.module('MenuApp')
.component('shoppingList', {
  templateUrl: 'itemdetail.template.html',
  bindings: {
    items: '<'
  }
});

})();
