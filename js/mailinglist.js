var mailapp=angular.module('formfield',["firebase"]);
    mailapp.controller('formcontroller',['$scope','$firebaseObject', function($scope, $firebaseObject) {
    $scope.formstofill = [{Field:'Name', Value:''},{Field:'Email', Value:''}, {Field:'Phone', Value:''}, {Field:"Message", Value:''}];
    $scope.filled= function filled(progress)
    { return (progress.Value!='');
    };
    $scope.subscribe = true; 
    $scope.firesync = [{}];   
        
        
        
    var ref = new Firebase("https://dazzling-heat-2850.firebaseio.com/");   
    var fireobj = $firebaseObject(ref);

        
    $scope.submitfunction = function submitfunction(information){
        fireobj.$bindTo($scope,"firesync");

        
    }; 
    
    
}]);

////Firebase management for subscription
//function submitfunc(){
//var myDataRef = new Firebase('https://dazzling-heat-2850.firebaseio.com/');
//var name = $('#name').val();
//var email = $('#email').val();
//var phonenumber = $('#phone').val(); 
//var message = $('#message').val();
////var subscribe = $('#subscribe').val();
//myDataRef.push({name: name, email: email, phonenumber: phone, message: message});
//};
