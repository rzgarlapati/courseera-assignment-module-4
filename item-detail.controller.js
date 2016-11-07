(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['items','$stateParams'];
function ItemDetailController(items,$stateParams) {
    this.items = [];
    var menu_items = items.data.menu_items;

   for(var i=0;i<menu_items.length;i++){
     var description = menu_items[i].short_name;
        if (description.indexOf($stateParams.category) >= 0) {
              this.items.push(menu_items[i]);
          }
   }

    
}

})();
