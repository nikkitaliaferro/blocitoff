(function() {
    angular
        .module('app')
        .directive('dTaskListItem', dTaskListItem);

    function dTaskListItem() {
        return {
            restrict: 'E',
            scope: {
                activeTask: '<'
            },
            bindToController: true,
            templateUrl: '/templates/task-list-item.html',
            controllerAs: '$ctrl',
            controller: ['$firebaseArray', '$scope', TaskListItemCtrl]
        };

        // Global Variables
        function TaskListItemCtrl($firebaseArray, $scope) {
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
