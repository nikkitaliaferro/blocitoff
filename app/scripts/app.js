var app = angular.module('dewApp', []);

app.controller('MainCtrl', function($scope) {
  $scope.priorityOption = [
    {value: 1, text: "Low"},
    {value: 2, text: "Medium"},
    {value: 3, text: "High"}
  ];
});