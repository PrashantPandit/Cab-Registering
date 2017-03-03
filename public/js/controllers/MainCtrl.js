angular.module('MainCtrl', []).controller('MainController', function($http, $scope, $location) {

    $scope.setMovie = function(movie){
    sessionStorage.setItem('selectedmovie',movie);
    $location.path('/Details');
  };
  var refresh = function () {
          $http.get('/movie/getMovie').success(function (response) {
          $scope.moviList = response;
          });
      };
      refresh();
});
