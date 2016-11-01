(function () {
  angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', AppRouteConfig]);

  function AppRouteConfig ($stateProvider, $urlRouterProvider, $locationProvider) {

    // Default URL tasks/index page.
    $urlRouterProvider.when('', '/tasks-active');
    $urlRouterProvider.when('/', '/tasks-active');

    $stateProvider
      .state('base', {
        url: '/',
        views: {
          'form': {
            template: '<d-todo-form></d-todo-form>'
          },
          'main': {
            template: '<ui-view></ui-view>'
          }
        }
      })
      .state('base.taskActive', {
        url: 'tasks-active',
        views: {
          '': {
            template: '<d-task-list-active></d-task-list-active>'
          }
        }
      })
      .state('base.taskCompleted', {
        url: 'completed-tasks',
        views: {
          '': {
            template: '<d-task-list-completed></d-task-list-completed>'
          }
        }
      })
  }
})();
