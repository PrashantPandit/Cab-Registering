angular.module('LogoutCtrl', []).controller("LogoutController", function($scope, $http, $location){

  $scope.logout= function(){
    $http.post('/logout').success(function(){
      //console.log(response);
      $location.path('/');
    });
  };
});
