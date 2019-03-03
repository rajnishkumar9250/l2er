angular.module('learn2earn')
.controller('projectdetailCtlr',['$scope','$filter', '$stateParams', '$http',  function($scope, $filter, $stateParams, $http){
  console.log('welcome to home controller');
  $scope.projectId = $stateParams.id;
  
  $http.get('/l2er/getprojectdet/'+$scope.projectId).then(function(data){
    console.log('class details: ', data);
    if(data.data.projectdetail){
      $scope.projectDetails = data.data.projectdetail; 
    }else{
	  var pgnotfd = '<div ng-include src="\'views/pagenotfound.html\'"></div>';
	  $('#maincontainer').html(pgnotfd);
	  $compile($('#maincontainer').contents())($scope);
	}
    
  }, function(err){
    console.error('Error: ', err);
  });
  
  
  $scope.dateFormat = function(utcDate){
    return new Date(utcDate);
  }
  
}]);