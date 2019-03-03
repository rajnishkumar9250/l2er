angular.module('learn2earn')
.controller('classCtlr', function($scope, $filter, $http){
  console.log('welcome to home controller');
  $scope.incomingClassLength = 0;
  $scope.ongoingClassLength = 0;
  $scope.completedClassLength = 0;
  $scope.ongoingclasses = [
    {
      id:1,
      title:'JavaScript',
      description: 'Started date - 02/03/2017, every Sunday 10:00AM - 1:00PM'
    },
    {
      id:2,
      title:'AngularJs',
      description: 'Started date - 08/04/2017, every Sunday 02:00AM - 5:00PM'
    }
    
  ];
  
  $scope.incomingclasses = [
    {
      id:3,
      title:'Linux',
      description: 'Started date - 16/04/2017, every Sunday 02:00AM - 04:00PM'
    },
    {
      id:4,
      title:'Python AND Django Framework',
      description: 'Started date - 07/05/2017, every Sunday 02:00AM - 04:00PM'
    },
  ];
  
  $http.get('/l2er/classes').then(function(data){
    console.log('classes: ', data);
    $scope.classlist = data.data.classlist;
    console.log('class list: ', $scope.classlist);
  }, function(err){
    console.log('Error: ', err);
  });
  
  
  $scope.classfilter = function (classtype) {
    console.log('already member: ', $scope.classlist);    
    return function(classdet) {
     //console.log('consultant id: ', consultant.clinicuserid);
     console.log('start date: ', classdet.start_date, 'current time: ', new Date())
     if(classtype == 'incomingclass' && new Date(classdet.start_date).getTime() >=  new Date().getTime()){
       console.log('incoming class');
       $scope.incomingClassLength++;
       return classdet;
     }else if(classtype == 'ongoingclass' && new Date(classdet.start_date).getTime() <  new Date().getTime() && new Date(classdet.end_date).getTime() >  new Date().getTime()){
       console.log('ongoing class');
       $scope.ongoingClassLength++;
       return classdet;
     }else if(classtype == 'completedclass' && new Date(classdet.end_date).getTime() <  new Date().getTime()){
       console.log('completed class');
       $scope.completedClassLength++;
       return classdet;
     }else{
       console.log('expired class');
	   return false;
     }    
    }
  };
  
});