(function () {
  angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', AppRouteConfig]);

  function AppRouteConfig ($stateProvider, $urlRouterProvider, $locationProvider) {

    // Default URL tasks/index page.
    $urlRouterProvider.when('', '/');

    $stateProvider
      .state('base', {
        url: '/',
        views: {
          'main': {
            template: '<d-todo-form></d-todo-form>'
          }
        }
      })
  }
})();