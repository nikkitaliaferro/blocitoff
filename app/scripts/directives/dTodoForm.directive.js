(function () {
  angular
    .module('app')
    .directive('dTodoForm', dTodoForm);

  function dTodoForm () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: '/templates/form.html',
      controllerAs: '$ctrl',
      controller: [TodoFormCtrl]
    };

    function TodoFormCtrl () {
      var vm = this;
      // var vm.taskText = '';
     
     // Set Priority Options
     vm.priorityOption = [
       {value: 1, text: "Low"},
       {value: 2, text: "Medium"},
       {value: 3, text: "High"}
     ];

     // Post Task
     vm.createTask = function createTask() {
        var task = {
          taskPriority: vm.taskPriority,
          taskText: vm.taskText
        };

        TaskCreate.save(task);
     };

    }
  }
})();
