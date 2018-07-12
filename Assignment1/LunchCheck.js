(function(){
    'use strict';
    angular.module('LunchCheck',[])
    .controller('LunchCheckController',checkLunch);
    checkLunch.$inject = ['$scope'];
    function checkLunch($scope)
    {
       $scope.item = "";  
       $scope.message = ""; 
       $scope.mycolor = "";      
       $scope.displayMessage = function(){
          var myvar = $scope.item.replace(/,,/gi,',');  
          var trim = myvar.replace(/(^,)|(,$)/g, "")
          $scope.item = trim;
          console.log($scope.item);
           if($scope.item == "")
           {
               $scope.countItem = 0;
                $scope.message = "Please enter data first";
                $scope.mycolor = "red";
           }
           else
           {
              $scope.countItem = $scope.item.replace(/,,/gi,',').trim(',').split(",").length;
              console.log($scope.countItem);
                if($scope.countItem <= 3)
                {
                    $scope.message = "Enjoy!";
                    $scope.mycolor = "green";
                }
                else
                {
                    $scope.message = "Too Much!";
                    $scope.mycolor = "green";
                }
            }
           
       };
       
    };
})();