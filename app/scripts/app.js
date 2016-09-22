var app = angular.module('dewApp', ['firebase']);

app.controller('TodoCtrl', function($scope) {
  $scope.priorityOption = [
    {value: 1, text: "Low"},
    {value: 2, text: "Medium"},
    {value: 3, text: "High"}
  ];
});