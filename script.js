var a = angular.module("myapp1", []);
a.controller("disp", function($scope){
    $scope.text = "Angular JS and Node JS!"
})

var a = angular.module("myapp2", []);
a.controller("disp2", function($scope){
    $scope.fname = "Devesh";
    $scope.lname = "Bardia";
    $scope.place = "Bangalore";
})

var a = angular.module("fullname", []);
a.controller("fname", function($scope){
    $scope.firstname = "Devesh"
    $scope.lastname = "Bardia"
})