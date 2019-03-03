angular.module('learn2earn')
.controller('requestforprojectCtlr',['$scope','$filter', '$stateParams', '$http', '$state',   function($scope, $filter, $stateParams, $http, $state){
  console.log('requestforprojectCtlr');
  $scope.projectInfo = {};
  $scope.projectreq = {};
  
  $scope.projectreq.firsttime = true;
  console.log('time: ', new Date());
  $scope.projectreq.todayDate = new Date().toDateString();
  $scope.projectInfo.startdate = $filter('date')(new Date(), "dd/MM/yyyy");
  $scope.$watch('projectInfo.startdate', function() {
        console.log('hey, myVar has changed!');
    if($scope.projectreq.firsttime){
      $scope.projectreq.endDate = new Date().toDateString();
      $scope.projectreq.firsttime = false;
    }else{
      console.log('Start date: ', $scope.projectInfo.startdate);
      var from = $scope.projectInfo.startdate.split('/');
      console.log('Start date: ', typeof $scope.projectInfo.startdate);
      $scope.projectreq.endDate = new Date(from[2], from[1] - 1, from[0]).toDateString();
      var toDate = $scope.projectInfo.enddate.split('/');
      console.log('from date: ', new Date(from[2], from[1] - 1, from[0]));
      console.log('to date: ', new Date(toDate[2], toDate[1] - 1, toDate[0]));
      if(new Date(from[2], from[1] - 1, from[0]).getTime() > new Date(toDate[2], toDate[1] - 1, toDate[0]).getTime()){
        $scope.projectInfo.enddate = $filter('date')(new Date(from[2], from[1] - 1, from[0]), "dd/MM/yyyy");
      }
      
      console.log('datestring: ', $scope.projectreq.endDate);
      //$scope.classInfo.startdate;
      //$('#enddate').attr('date-min-limit', $scope.classreq.endDate)
      
    }    
  });
  
  $scope.requestforproj = function(){
    $http.post('/l2er/requestforproject', $scope.projectInfo).then(function(data){
      console.log('data: ', data);
      if( data.data.msg.status == 'success'){
        console.log('successfully requested for project');  
        alert('successfully requested for this project.We will shortly reach to you.Thank you for query!');
        $state.go('project');
      }
      console.log('status: ', data.data.msg.status);
    }, function(err){
      console.log('Error: ', err);
    });  
  };
  
}]);