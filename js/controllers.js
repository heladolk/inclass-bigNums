var testApp = angular.module('testApp', []);

testApp.controller('TestController', function ($scope) {
	$scope.bigNums = [34345, 234532, 3454, 236346, 23434545, 23, 23]
	$scope.num = 10000.00000;
});
