angular.module('learn2earn')
.controller('classdetailCtlr', function($scope, $filter, $stateParams, $compile, $http){
  console.log('welcome to home controller');
  $scope.classId = $stateParams.id;
  
  $http.get('/l2er/getclassdet/'+$scope.classId).then(function(data){
    console.log('class details: ', data);
    if(data.data.classdetail){
      $scope.classDetails = data.data.classdetail; 
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
  
});