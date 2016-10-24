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
                        isTaskComplete: false,
                        category: 'active'
                    })
                    .then(
                        vm.taskText = '',
                        vm.isCreateTaskVisable = false
                    );
            };

            // Is Completed Task
            vm.isTaskComplete = function(tasks) {
                if (tasks.isTaskComplete === false) {
                    tasks.isTaskComplete = true;
                    tasks.category = 'completed';
                } else {
                    tasks.isTaskComplete = false;
                    tasks.category = 'active';
                }
                taskList.$save(tasks);
            };

            // Remove task
            vm.removeTask = function(tasks) {
                taskList.$remove(tasks);
            };
            //Set selection and filter
            vm.filters = { };


        }
    }

})();
