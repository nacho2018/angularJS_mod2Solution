(function(){
'use strict';

  angular.module('app', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];

//manages to buy items
  function ToBuyController(ShoppingListCheckOffService){

    var toBuyCtrl = this;
    //gets the items to be bought
    toBuyCtrl.toBuyList = ShoppingListCheckOffService.getToBuyList();
    //pass item to already bought list
    toBuyCtrl.getItemToAlreadyBoughtList = function(indexItem){

      ShoppingListCheckOffService.getItemToAlreadyBoughtList(indexItem);
    };

  };
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

//manages bought items
  function AlreadyBoughtController(ShoppingListCheckOffService){

    var abCtrl = this;
    abCtrl.alreadyBoughtList =
      ShoppingListCheckOffService.getAlreadyBoughtShoppingList();

  };

//manages items for both lists
  function ShoppingListCheckOffService(){

    var service = this;

    var shoppingList = [
      {name: 'tomatoes', quantity: 10},
      {name: 'oranges', quantity: 5},
      {name: 'watermelon', quantity: 3},
      {name: 'apples', quantity: 15},
      {name: 'bananas', quantity: 3},
    ];

    var alreadyBoughtShoppingList = [];

    //gets the to buy list
    service.getToBuyList = function(){

      return shoppingList;
    };
    //gets the already bought list
    service.getAlreadyBoughtShoppingList = function(){

      return alreadyBoughtShoppingList;
    };
    //pass an item to the right
    service.getItemToAlreadyBoughtList = function(indexItem){

      var item = shoppingList[indexItem];
      console.log("item to pass: ",item.name + ' ' + item.quantity);
      shoppingList.splice(indexItem, 1);
      alreadyBoughtShoppingList.push(item);
    };


  };
})();
