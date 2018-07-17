angular.module('todo',["ngRoute"])
.config(routeconfig)
.controller("registrationCtrl",registrationCtrl)
.controller("homeCtrl",homeCtrl)
.controller("taskCtrl",taskCtrl)
.factory("hometaskName",hometaskName)
.factory("todoName",todoName)
function todoName()
{
    return[];
}
function hometaskName()
{
    return {};
}
function routeconfig($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/registration.html"
    })
    .when("/home", {
        templateUrl : "views/home.html"
    })
    .when("/tasks/:tasklist", {
        templateUrl : "views/tasks.html"
    })
    .otherwise({redirectTo:'/'})
}
   function registrationCtrl($scope,$location){
       var arr=[];
       $scope.signIn={};
       $scope.signUp={};
        $scope.formToggle=true;
       $scope.obj={};
        $scope.toggle=function(x){
            if(x){
                $scope.formToggle=false;
            }
            else
            {
                $scope.formToggle=true;
            }
        }
            $scope.submit=function()
            {
                arr.push($scope.signUp);
                var local = JSON.stringify(arr);
                localStorage.setItem("abc",local);
                $scope.signUp={};
            }
            $scope.submitsignIn=function(){
                var xyz=localStorage.getItem("abc");
                var pqr = JSON.parse(xyz);
                console.log(pqr);
                for(i=0;i<pqr.length;i++){
                if($scope.signIn.email == pqr[i].email && $scope.signIn.password == pqr[i].password)
                {
                  $location.path('/home');
                }
                }
                
            }
   }
   function homeCtrl($scope,hometaskName)
   {
       $scope.arr=[];
       $scope.buttonToggle=true;
       var index;
       $scope.submit=function(){
           if($scope.abc)
           {
       $scope.arr.push($scope.abc);
       hometaskName[$scope.abc]=[];
        $scope.abc='';
       }
       else{
           window.alert('enter text');
       }
    }
    $scope.editabc = function(i)
    {
        console.log(hometaskName);
        index = i;
        $scope.abc = $scope.arr[i];
        delete hometaskName[$scope.arr[i]]
        $scope.buttonToggle = false;
        console.log(hometaskName);
    }
    $scope.update=function(){
        $scope.arr[index]=$scope.abc;
        $scope.buttonToggle = true;
        $scope.abc='';
    }
    $scope.deleteabc=function(i){
        if(confirm("are you sure"))
        {
            $scope.arr.splice(i,1);
        }
        else{
            return;
        }
    }
}
function taskCtrl($scope,$routeParams,hometaskName)
{
    $scope.arr=hometaskName[$routeParams.tasklist];
    $scope.buttonToggle=true;
    $scope.headingName=$routeParams.tasklist;
    $scope.abc=function()
    {
        $scope.arr.push($scope.xyz);
        $scope.xyz='';
    }
    $scope.swap=function(x,i)
    {
        if(x)
        {
            var swap = $scope.arr[i];
            $scope.arr[i] = $scope.arr[i+1];
            $scope.arr[i+1] = swap;
        }
        else{
            var swap = $scope.arr[i];
            $scope.arr[i] = $scope.arr[i-1];
            $scope.arr[i-1] = swap;
        }
    }
    $scope.editabc = function(i)
    {
        console.log(hometaskName);
        index = i;
        $scope.xyz = $scope.arr[i];
        delete hometaskName[$scope.arr[i]]
        $scope.buttonToggle = false;
        console.log(hometaskName);
    }
    $scope.update=function(){
        $scope.arr[index]=$scope.xyz;
        $scope.buttonToggle = true;
        $scope.xyz='';
    }
    $scope.deleteabc=function(i){
        if(confirm("are you sure"))
        {
            $scope.arr.splice(i,1);
        }
        else{
            return;
        }
    }
    
}

