angular
  .module('cart')
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('ls');
}])
  .factory('CartService', function ($http, $rootScope) {
    var url = 'http://tiny-tiny.herokuapp.com/collections/reddot-cart';

    var getCartProducts = function () {
      return $http.get(url);
    };

    var getProducts = function(id) {
      return $http.get(url + "/" + id);
    };

    var addToCart = function(id) {
      return $http.get(url + "/" + id);
    };

    return {
      getProducts: getProducts,
      getCartProducts: getCartProducts,
      addToCart: addToCart
    };
  });
