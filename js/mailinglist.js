var mailapp=angular.module('formfield',["firebase"]);
    mailapp.controller('formcontroller',['$scope','$firebaseArray', function($scope, $firebaseArray) {
        var ref = new Firebase("https://dazzling-heat-2850.firebaseio.com/");   
        $scope.firesync = $firebaseArray(ref);
        $scope.formstofill = [{Field:'Name', Value:''},{Field:'Email', Value:''}, {Field:'Phone', Value:''}, {Field:"Message", Value:''}];
        $scope.filled= function filled(progress){
            return (progress.Value!='');
        };
        $scope.subscribe = true;
        $scope.submitfunction =function(){
            $scope.formstofill.push($scope.subscribe);
            window.alert("Thanks for Leaving a Message!");
            $scope.firesync.$add($scope.formstofill);    
            $scope.formstofill.pop();
            angular.forEach($scope.formstofill, function(value,key){
                value.Value='';
                
            }) 
        
    };      
    
    
    
}]);
