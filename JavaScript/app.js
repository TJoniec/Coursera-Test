(function () {
'use strict';


angular.module('myFirstApp', [])

.controller('MyFirstController', function($scope) {
$scope.name="Tony in Div 1";
})

.controller('MySecondController', function($scope) {
$scope.name="Tony in Div 2";
})



})();
