const URL = "http://localhost:8080/";

let app = angular.module('myApp', []);
app.controller('myController', function ($scope, $http) {

$scope.btnName = "Add Employee"
 $scope.id = -1;
 $scope.name = "";
 $scope.address = "";
 

 

//getting all the employees 
function refresh(){
    $http.get(URL +'employees').then(function(response){
        console.log("success");
        console.log(response);
       
       $scope.all_data = response.data;
       
       // $scope.all_data = JSON.parse(all_data);
       
    
   
    }, function(error){
        console.log(error);
   
    });
}
refresh();


 //add employee and edit employee

 $scope.addEmployee = function (name, address) {

    let employee = {
    name: name,
    address: address
    
    };
    
    if($scope.id==-1){
        $http.post(URL+'employees', JSON.stringify(employee)).then(function(response){
            if(response.data){
                refresh();
                clearForm();
                $scope.msg ="Data inserted successfully";
                console.log($scope.msg);
                
            }
            else{
                console.log("post data error");
            }
       
        }, function(error){
            console.log("add data error");
       
        });

    }
    else{
       
        
        
            $http.put(URL+'employees/'+$scope.id, JSON.stringify(employee)).then(function(response){
                if(response.data){
                    console.log("update successfully");
                    $scope.btnName ="Add Employee";
                    alert("Employee update Successfully");
                    refresh();
                    clearForm();
                }
    
            },
            function(error){
                console.log("error");
            });
        
    }
 
 };



 //delete employee
 $scope.removeEmployee = function( emp ) {
     console.log(emp);
   
    $http.delete(URL+'employees/'+emp.id).then(function(response){
        console.log("deleted successfully");
        alert("Employeed got fired");
        refresh();
        

    },
    function(error){
        console.log("delete error")

    });
};

$scope.editEmployee = function( emp ){
    $scope.btnName = "Update Employee";
    $scope.id = emp.id;
    $scope.name = emp.name;
    $scope.address = emp.address;
    console.log($scope.id, $scope.name, $scope.address)
   
}



function clearForm(){
    $scope.id = -1;
    $scope.name = "";
    $scope.address = "";
}
});

