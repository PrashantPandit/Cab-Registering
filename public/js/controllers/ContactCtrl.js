angular.module('ContactCtrl', []).controller('ContactController', function($http, $scope){

var refresh = function(){
  $http.get('/contact/getContact').success(function(response){
      console.log("Contact Read is complete...");
      $scope.contactList = response;
      $scope.cont = "";
  });
};
refresh();

  $scope.addContact = function(){
    $http.post('/contact/addContact/', $scope.cont).success(function(response){
      console.log(response);
      console.log("Contact details are added successfully...");
      refresh();
    });
  };
});
