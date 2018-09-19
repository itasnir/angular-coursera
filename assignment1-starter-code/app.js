(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('LunchCheckController', function ($scope) {
  $scope.foods = "";
  $scope.return_msg = "";
  $scope.customStyle = {};


  $scope.get_msg = function() {
    var total_food_count = get_msg_by_count(find_count($scope.foods));
    $scope.return_msg = total_food_count;
  };

  function find_count(st){
    if (!st) {
      return 0
    }
    var words = st.split(",").filter(e=>String(e).trim());
    return words.length;
  };

  function get_msg_by_count(items_number){
    if (items_number==0) {
      $scope.customStyle.style = {"color":"red"};
      $scope.customStyle.borderstyle = {"border-color":"red"};
      return "Please enter data first";
    }
    else if (items_number<=3){
      $scope.customStyle.style = {"color":"green"};
      $scope.customStyle.borderstyle = {"border-color":"green"};
      return "Enjoy";
    }
    else {
      $scope.customStyle.style = {"color":"green"};
      $scope.customStyle.borderstyle = {"border-color":"green"};
      return "Too much!";
    }

  };




});

})();
