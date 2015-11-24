angular.module("ecommerceApp", ["ui.router", "ngCart"])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'app/routes/home/hometmpl.html',
    controller: 'homeCtrl',
  })
});
