angular.module('learn2earn')
.controller('requestforclassCtlr',['$scope','$filter', '$stateParams', '$http', '$state',  function($scope, $filter, $stateParams, $http, $state){
  console.log('requestforclassCtlr');
  $scope.classInfo = {};
  
  $scope.classreq = {};
  $scope.classreq.firsttime = true;
  console.log('time: ', new Date());
  $scope.classreq.todayDate = new Date().toDateString();
  $scope.classInfo.startdate = $filter('date')(new Date(), "dd/MM/yyyy");
  //$scope.classreq.endDate =  new Date().toDateString();
  
  
  $scope.$watch('classInfo.startdate', function() {
        console.log('hey, myVar has changed!');
    if($scope.classreq.firsttime){
      $scope.classreq.endDate = new Date().toDateString();
      $scope.classreq.firsttime = false;
    }else{
      console.log('Start date: ', $scope.classInfo.startdate);
      var from = $scope.classInfo.startdate.split('/');
      console.log('Start date: ', typeof $scope.classInfo.startdate);
      $scope.classreq.endDate = new Date(from[2], from[1] - 1, from[0]).toDateString();
      var toDate = $scope.classInfo.enddate.split('/');
      console.log('from date: ', new Date(from[2], from[1] - 1, from[0]));
      console.log('to date: ', new Date(toDate[2], toDate[1] - 1, toDate[0]));
      if(new Date(from[2], from[1] - 1, from[0]).getTime() > new Date(toDate[2], toDate[1] - 1, toDate[0]).getTime()){
        $scope.classInfo.enddate = $filter('date')(new Date(from[2], from[1] - 1, from[0]), "dd/MM/yyyy");
      }
      
      console.log('datestring: ', $scope.classreq.endDate);
      //$scope.classInfo.startdate;
      //$('#enddate').attr('date-min-limit', $scope.classreq.endDate)
      
    }    
  });
  
  $scope.requestforcls = function(){
    $http.post('/l2er/requestforclass', $scope.classInfo).then(function(data){
      console.log('data: ', data);
      if( data.data.msg.status == 'success'){
        console.log('successfully requested for class');  
        alert('successfully requested for this class.We will shortly reach to you.Thank you for query!');
        $state.go('class');
        
      }
      console.log('status: ', data.data.msg.status);
    }, function(err){
      console.log('Error: ', err);
    });  
  };
  
}]);