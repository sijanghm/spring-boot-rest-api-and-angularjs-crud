const URL = "http://localhost:8080/api/";

let app = angular.module('myApp', []);
app.controller('myController', function ($scope, $http) {

//getting all the employees
 $http.get(URL +'employees').then(function(response){
     console.log("success");
     console.log(response);

    $scope.all_data = response.data;
    $scope.all_data = JSON.parse(all_data)


//    let all =  angular.forEach($scope.all_data, function(item){
//         $scope.Id = item.id; // id is in $scope.Id
//         $scope.Name = item.name; // name is in $scope.Name
//         $scope.Address = item.address; // email is in $scope.Email

//     });


 }, function(error){
     console.log(error);

 })

 });