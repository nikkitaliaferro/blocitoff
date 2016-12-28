(function() {
    angular
        .module('app')
        .directive('dTaskListNav', dTaskListNav);

    function dTaskListNav() {
        return {
            restrict: 'E',
            scope: {},
            bindToController: true,
            templateUrl: 'templates/task-list-nav.html',
            controllerAs: '$ctrl',
            controller: [TaskListNavCtrl]
        };

        // Global Variables
        function TaskListNavCtrl() {
            var vm = this;

        }
    }

})();
