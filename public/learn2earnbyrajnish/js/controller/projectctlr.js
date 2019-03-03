angular.module('learn2earn')
.controller('projectCtlr',['$scope','$filter','$http', function($scope, $filter, $http){
  console.log('welcome to home controller');
  $scope.incomingProjectlength = 0;
  $scope.ongoingProjectlength = 0;
  $scope.completedProjectlength = 0;
  $http.get('/l2er/projects').then(function(data){
    console.log('classes: ', data);
    $scope.projectlist = data.data.projectlist;
    console.log('class list: ', $scope.projectlist);
  }, function(err){
    console.log('Error: ', err);
  });
  
  
  $scope.projectfilter = function (projecttype) {
    console.log('already member: ', $scope.projectlist);    
    return function(projectdet) {
     //console.log('consultant id: ', consultant.clinicuserid);
     console.log('start date: ', projectdet.start_date, 'current time: ', new Date())
     if(projecttype == 'incomingproject' && new Date(projectdet.start_date).getTime() >=  new Date().getTime()){
       console.log('incoming project');
       $scope.incomingProjectlength++;
       return projectdet;
     }else if(projecttype == 'ongoingproject' && new Date(projectdet.start_date).getTime() <  new Date().getTime() && new Date(projectdet.end_date).getTime() >  new Date().getTime()){
       console.log('ongoing project');
       $scope.ongoingProjectlength++;
       return projectdet;
     }else if(projecttype == 'completedproject' && new Date(projectdet.end_date).getTime() <  new Date().getTime()){
       console.log('completed project');
       $scope.completedProjectlength++;
       return projectdet;
     }else{
       console.log('expired project');
	   return false;
     }    
    }
  };
}]);