(function () {
'use strict';


angular.module('myFirstApp', [])

.controller('MyFirstController', function($scope) {
$scope.name="Tony";
$scope.sayHello = function () {
  return "Hello World";
};

})

})();
