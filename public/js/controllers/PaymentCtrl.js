angular.module('PaymentCtrl', []).controller('PaymentController', function($http, $scope){


  var mapping = function(){
   $http.get('/mapping/getMapping').success(function(response) {
        $scope.mapList = response;
  });
};

  var refresh = function(){
    $http.get('/payment/getPayment').success(function(response){
      console.log("Payment Read is complete");
      $scope.paymentList = response;
      $scope.pay = "";
    });
  };
  refresh();

$scope.addPayment = function(){
  $http.post('/payment/addPayment', $scope.pay).success(function(response){
    console.log(response);
    console.log("Payment details are added successfully...");
    refresh();
  });
};
});
