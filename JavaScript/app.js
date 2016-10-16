(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function($scope) {
$scope.name="Tony in Div 1";



$scope.functionReturn = (function ($scope){
    return "Hello from a function call";
});

})

.controller('MySecondController', function($scope) {
$scope.name="Tony in Div 2";
})



})();
