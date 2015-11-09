angular.module('formfield',[])
    .controller('formcontroller',function() {
    this.formstofill = [{Field:'Name', Value:''},{Field:'Email', Value:''}, {Field:'Phone', Value:''}, {Field:"Message", Value:''}];
    this.filled= function filled(progress)
    { return (progress.Value!=''); 
    };
    
    
});

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
