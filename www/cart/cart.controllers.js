angular
  .module('cart')
  .controller('CartCtrl', function ($scope, $ionicPopup, $state, CartService, StoresService, $stateParams, localStorageService,$rootScope) {
    var vm = this;
    glob = $rootScope.cartList;
    if($stateParams.cartProductId) {
      vm.cart = $rootScope.cartList;
    }

    $scope.getOneStore = function() {
      var id = $stateParams.storeId;
      StoresService.getStore(id).then(function(data) {
        //  console.log('is this what you want?', data);
         $scope.stores = data;
       });
    };

    $scope.removeProduct = function (product) {
      $rootScope.cartList.forEach(function(item,idx,arr) {
        if(item.productName === product.productName) {
          arr.splice(idx,1);
        }
      });
      $scope.getTotalPrice();
    };

//added this for the customer button to direct to checkout view
    $scope.goCheckOut = function () {
      var id = $stateParams.storeId;
      $state.go('app.checkout', {storeId: id});
      };

    $scope.getTotalPrice = function () {
      totalPrice = 0; //this is reading out to the total
      // for (var i = 0; i < $scope.cartList.length; i++) {
      //   if ($scope.products[i].productPrice) {
      //     totalPrice += $scope.products[i].productPrice;
      //   }
      // }
      $rootScope.cartList.forEach(function(item) {
        if(item.productPrice) {
          totalPrice += item.productPrice;
          // console.log('what is total productPrice', totalPrice);
        }
      });
      $scope.totalPriceValue = totalPrice;
    };

        $scope.showConfirm = function() {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Consume Ice Cream',
                template: 'Are you sure you want to eat this ice cream?'
            });
            confirmPopup.then(function(res) {
                if (res) {
                    console.log('You are sure');
                } else {
                    console.log('You are not sure');
                }
            });
        };

  });
    // Credit card payment
    // $scope.card = {
    // name: 'Jon Snow',
    // number: '5555 4444 3333 1111',
    // expiry: '11 / 2020',
    // cvc: '123'
    // };

    // $scope.cardPlaceholders = {
    //   name: 'Your Full Name',
    //   number: 'xxxx xxxx xxxx xxxx',
    //   expiry: 'MM/YY',
    //   cvc: 'xxx'
    // };
    //
    // $scope.cardMessages = {
    //   validDate: 'valid\nthru',
    //   monthYear: 'MM/YYYY',
    // };
    //
    // $scope.cardOptions = {
    //   debug: false,
    //   formatting: true
    // };

    // $scope.showConfirm = function() {
    //    var confirmPopup = $ionicPopup.confirm({
    //      title: 'All customers must show proper identification upon pickup',
    //      template: 'Are you sure you are of the legal age of consumption?'
    //    });
    //    confirmPopup.then(function(res) {
    //      if(res) {
    //        console.log('You are sure');
    //      } else {
    //        console.log('You are not sure');
    //      }
    //    });
    //  };
