// services for adding an item and getting an item

(function() {
  'use strict';

  angular
  .module('reddots.services')
  .factory('ReddotService', function ($http) {

      var addItem = function(newItem){
        $http.post(url, newItem).then(function(res) {
          console.log(res);
        });
      };

      var getItems = function () {
        return $http.get(url);
      };

      return {
        addItem: addItem,
        getItems: getItems
      };
  });

}());