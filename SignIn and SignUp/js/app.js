angular.module("todolist",[])
.controller("ctrl",ctrl)
function ctrl($scope){
    $scope.formToggle = true;

$scope.toggle = function(x)
    {
       if(x)
       {
        $scope.formToggle = false;
       } 
       else
       {
        $scope.formToggle = true;
       }
    }
}
