angular.module('mailinglist', [])
    .controller("progress", ["$scope", function ($scope) {
    $scope.name;
    $scope.email; 
    $scope.phone;
    $scope.message;
    $scope.subscribeinput; 
    $scope.namecomplete = function (){return $scope.name!=null;};    
    $scope.emailcomplete = function (){return $scope.email!=null;}; 
    $scope.phonecomplete = function (){return $scope.phone!=null;}; 
    $scope.messagecomplete = function (){return $scope.message!=null;}; 

        
    }]);

//Firebase management for subscription
function submitfunc(){
var myDataRef = new Firebase('https://dazzling-heat-2850.firebaseio.com/');
var name = $('#name').val();
var email = $('#email').val();
var phonenumber = $('#phone').val(); 
var message = $('#message').val();
//var subscribe = $('#subscribe').val();
myDataRef.push({name: name, email: email, phonenumber: phone, message: message});
};
