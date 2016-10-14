(function() {
    angular
        .module('app')
        .directive('dTodoForm', dTodoForm);

    function dTodoForm() {
        return {
            restrict: 'E',
            scope: {},
            bindToController: true,
            templateUrl: '/templates/form.html',
            controllerAs: '$ctrl',
            controller: ['$firebaseArray', TodoFormCtrl]
        };

        // Global Variables
        function TodoFormCtrl($firebaseArray) {
            var vm = this;
            var taskRef = firebase.database().ref('tasks');
            var taskList = $firebaseArray(taskRef);

            console.log(taskList);

            vm.taskList = taskList;

            // Set Priority Options
            vm.priorityOption = [{
                value: 1,
                text: "Low"
            }, {
                value: 2,
                text: "Medium"
            }, {
                value: 3,
                text: "High"
            }];

            // Create Task
            vm.createTask = function() {
              taskList.$add({
                taskPriority: vm.taskPriority,
                text: vm.taskText,
                isTaskComplete: false
              })
            }

        };
    }

})();
