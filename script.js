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

//SHOPPING CART

var a = angular.module("shopping", []);
a.controller("cart", function($scope){
    $scope.items = ['mango','cherry','strawberry','apple']
    $scope.add = function(){
        if ($scope.additem && $scope.items.indexOf($scope.additem)==-1)
        {
           $scope.items.push($scope.additem);
           $scope.additem="";
        }
        else{
            if($scope.additem)
            {
                alert("Already exist");
                document.getElementById("ip").focus();
                return false;
            }
            else {
                alert("please enter item to add");
                document.getElementById("ip").focus();
                return false;
            }
        }
    }
    $scope.remove=function()
        {
            if($scope.items.indexOf($scope.removeitem)==-1)
            {
                alert("Please select an item to remove");
                document.getElementById("rm").focus()
                return false; 
            }
            else{
                var index=$scope.items.indexOf($scope.removeitem);
                $scope.items.splice(index,1)
                $scope.removeitem="";
            }
        } 
})



//CALCULATOR

var a = angular.module("calculator", []);
a.controller("cal", function($scope){
    $scope.display='';
    $scope.appendnumber = function(digit){
        $scope.display += digit;
    }

    $scope.handleaction = function(action){
        switch(action){
            case 'C' :
                $scope.display = "";
                break;
            case '=' :
                try{
                    $scope.display = eval($scope.display).toString();
                    if($scope.display === 'Infinity' || $scope.display === '-Infinity'){
                        throw 'Enter proper Denominator';
                        $scope.display = "";
                    }
                } catch (error){
                    $scope.display = '';
                    alert("Invalid Input")
                }
                break;

            default :
            $scope.display += action;
        }
    }
})

//Factorial & Square

var a = angular.module("factnsq", []);
a.controller("factnsqctrl", function($scope){
    $scope.num = "";
    $scope.result = "";
    $scope.factorial = function(){
        if($scope.num == "")
        {
            alert("Please enter a number!")
            document.getElementById("ip").focus();
            return false;
        }
        else if($scope.num == 0)
        {
            $scope.result = 1
        }
        else if($scope.num < 0 || $scope.num.includes(".")){
            $scope.result = $scope.num + "! is undefined";
        }
        else{
            $scope.fact = 1;
            for(var i=$scope.num; i>=1;i--)
                $scope.fact = $scope.fact * i;
                $scope.result = $scope.fact;
        }
    }

    $scope.square = function(){
        if($scope.num == "")
        {
            alert("Please enter a number!")
            document.getElementById("ip").focus();
            return false;
        }
        $scope.result = $scope.num * $scope.num;
    }
})


//Generating records according to Entered value

var a = angular.module("usn", []);
a.controller("usncount", function($scope){
    $scope.display_records = function(){
        $scope.students = [];
        for(var i=0;i<$scope.snum;i++)
        {
            $scope.students.push({
                name : 'Student ' + (i+1),
                cgpa : (Math.random() * 10).toFixed(2)
            })
        }
    }
})


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

//SHOPPING CART

var a = angular.module("shopping", []);
a.controller("cart", function($scope){
    $scope.items = ['mango','cherry','strawberry','apple']
    $scope.add = function(){
        if ($scope.additem && $scope.items.indexOf($scope.additem)==-1)
        {
           $scope.items.push($scope.additem);
           $scope.additem="";
        }
        else{
            if($scope.additem)
            {
                alert("Already exist");
                document.getElementById("ip").focus();
                return false;
            }
            else {
                alert("please enter item to add");
                document.getElementById("ip").focus();
                return false;
            }
        }
    }
    $scope.remove=function()
        {
            if($scope.items.indexOf($scope.removeitem)==-1)
            {
                alert("Please select an item to remove");
                document.getElementById("rm").focus()
                return false; 
            }
            else{
                var index=$scope.items.indexOf($scope.removeitem);
                $scope.items.splice(index,1)
                $scope.removeitem="";
            }
        } 
})



//CALCULATOR

var a = angular.module("calculator", []);
a.controller("cal", function($scope){
    $scope.display='';
    $scope.appendnumber = function(digit){
        $scope.display += digit;
    }

    $scope.handleaction = function(action){
        switch(action){
            case 'C' :
                $scope.display = "";
                break;
            case '=' :
                try{
                    $scope.display = eval($scope.display).toString();
                    if($scope.display === 'Infinity' || $scope.display === '-Infinity'){
                        throw 'Enter proper Denominator';
                        $scope.display = "";
                    }
                } catch (error){
                    $scope.display = '';
                    alert("Invalid Input")
                }
                break;

            default :
            $scope.display += action;
        }
    }
})

//Factorial & Square

var a = angular.module("factnsq", []);
a.controller("factnsqctrl", function($scope){
    $scope.num = "";
    $scope.result = "";
    $scope.factorial = function(){
        if($scope.num == "")
        {
            alert("Please enter a number!")
            document.getElementById("ip").focus();
            return false;
        }
        else if($scope.num == 0)
        {
            $scope.result = 1
        }
        else if($scope.num < 0 || $scope.num.includes(".")){
            $scope.result = $scope.num + "! is undefined";
        }
        else{
            $scope.fact = 1;
            for(var i=$scope.num; i>=1;i--)
                $scope.fact = $scope.fact * i;
                $scope.result = $scope.fact;
        }
    }

    $scope.square = function(){
        if($scope.num == "")
        {
            alert("Please enter a number!")
            document.getElementById("ip").focus();
            return false;
        }
        $scope.result = $scope.num * $scope.num;
    }
})


//Generating records according to Entered value

var a = angular.module("usn", []);
a.controller("usncount", function($scope){
    $scope.display_records = function(){
        $scope.students = [];
        for(var i=0;i<$scope.snum;i++)
        {
            $scope.students.push({
                name : 'Student ' + (i+1),
                cgpa : (Math.random() * 10).toFixed(2)
            })
        }
    }
})
