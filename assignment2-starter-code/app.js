(function () {
'use strict';

var shoppingList1 = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "5"
  },
  {
    name: "bread",
    quantity: "2"
  },
  {
    name: "Ice Cream",
    quantity: "1"
  }
];

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

ToBuyController.$inject = ["ShoppingListService"];
function ToBuyController(ShoppingListService) {
  var ToBuy = this;
  ToBuy.ToBuyList = ShoppingListService.getNotBoughtItems();

  //itemAdder.itemName = "";
  //itemAdder.itemQuantity = "";

  ToBuy.BuyItem = function(ItemIdx){
    ShoppingListService.BuyItem(ItemIdx);
  }
};

AlreadyBoughtController.$inject = ["ShoppingListService"];
function AlreadyBoughtController(ShoppingListService) {
  var item = this;
  item.AlreadyBoughtList = ShoppingListService.getBoughtItems();
};


function ShoppingListService() {
  var service = this;
  // List of shopping items
  var BoughtItems = [];
  var NotBoughtItems = shoppingList1;

  service.BuyItem = function (Idx) {
    var item = NotBoughtItems[Idx];
    //var item = {
    //  name: itemName,
    //  quantity: quantity
    //};
    BoughtItems.push(item);
    NotBoughtItems.splice(Idx,1);
  };

  service.getBoughtItems = function () {
    return BoughtItems;
  };
  service.getNotBoughtItems = function (){
    return NotBoughtItems;
  };

};


})();
