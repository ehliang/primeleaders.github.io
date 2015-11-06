angular.module('mailinglist', [])
    .controller("progress", ["$scope", function ($scope) {
    $scope.name;
    $scope.email; 
    $scope.phone;
    $scope.message; 
    $scope.namecomplete = function (){return $scope.name!=null;};    
    $scope.emailcomplete = function (){return $scope.email!=null;}; 
    $scope.phonecomplete = function (){return $scope.phone!=null;}; 
    $scope.messagecomplete = function (){return $scope.message!=null;}; 
        
    }]);