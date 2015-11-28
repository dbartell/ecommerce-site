angular.module("ecommerceApp", ["ui.router", "ngCart"])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'app/routes/home/hometmpl.html',
    controller: 'homeCtrl',
  })
  .state('shop', {
    url: '/shop',
    templateUrl: 'app/routes/shop/shoptmpl.html',
    controller: 'shopCtrl',
  })
  .state('blog', {
    url: '/blog',
    templateUrl: 'app/routes/blog/blogtmpl.html',
    controller: 'blogCtrl',
  })
  .state('cart', {
    url: '/cart',
    templateUrl: 'app/routes/cart/carttmpl.html',
    controller: 'cartCtrl',
  })
});
