angular.module('SummaryCtrl', []).controller('SummaryController', function($http, $scope){

  var mapping = function(){
   $http.get('/mapping/getMapping').success(function(response) {
        $scope.mapList = response;
  });
};

var f = sessionStorage.getItem('cls');
var e = sessionStorage.getItem('nOfS');
var g = sessionStorage.getItem('Amt');

//document.getElementById('tim').innerHTML= d;
document.getElementById('cls').innerHTML= f;
document.getElementById('tkt').innerHTML= e;
document.getElementById('amt').innerHTML= g;

});
