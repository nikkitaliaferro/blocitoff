(function() {
    angular
        .module('app')
        .directive('dTaskListActive', dTaskListActive);

    function dTaskListActive() {
        return {
            restrict: 'E',
            scope: {},
            bindToController: true,
            templateUrl: '/templates/task-list-active.html',
            controllerAs: '$ctrl',
            controller: ['$firebaseArray', TaskListActiveCtrl]
        };

        // Global Variables
        function TaskListActiveCtrl($firebaseArray) {
            var vm = this;
            var taskRef = firebase.database().ref('tasks');
            var taskList = $firebaseArray(taskRef);

            vm.taskList = taskList;


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
        }
    }

})();
