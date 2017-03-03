angular.module('MovieCtrl', []).controller('MovieController', function($scope, $http) {

    $scope.tagline = 'Add your movies here!';
    $scope.booking = 'booking';

    var refresh = function() {
        $http.get('/movie/getMovie').success(function(response) {
            console.log('READ IS SUCCESSFUL');
            $scope.moviList = response;
            $scope.movi = "";
        });
    };
    refresh();

    $scope.searchMovie = function(){
      $http.get('http://www.omdbapi.com/?t='+$scope.name+'&y='+$scope.year+'&plot=short&r=json').success(function (response) {
        $scope.movi=response;
        if(!$scope.movi.Title)
        alert('ERROR : No such movie found, please confirm year.');
      });
    };
    refresh();

    $scope.addMovie = function(movi) {
      $http.get('/movie/movieExist/' + $scope.movi.imdbID).success(function (response) {

        var currCount = response.length;
        if( currCount == 0 )
        {
            $http.post('/movie/addMovie', $scope.movi).success(function (response) {
            });
            alert('Do you want to add movie.');
            refresh();
            $scope.movi='';
        }
        else
        {
          alert('Movie Already Exists.');
          refresh();
          $scope.movi='';
        }
      });
    };

    $scope.removeMovie = function(movie) {
      $http.delete('/movie/deleteMovie/' + movie._id).success(function(response) {
            console.log(response);
            console.log('Movie deleted successfully...');
            refresh();
        })
      }

  });
