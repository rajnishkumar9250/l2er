angular.module('learn2earn')
.controller('homeCtlr', function($scope, $filter){
  console.log('welcome to home controller');
  
  
  var testArrayOfJson = [
    {
      name : 'rajnish',
      employeeid: 1,
      address: 'mokama',
      phonenumber: '8892804623'
    },
    {
      name : 'abhishek',
      employeeid: 2,
      address: 'patna',
      phonenumber: '9030212324'
    },
    {
      name : 'rakesh',
      employeeid: 3,
      address: 'ara',
      phonenumber: '9905893453'
    }
    
    
    
  ];
  
  $scope.employeeList = testArrayOfJson;
  
  /*Filter employee list*/
  $scope.filterEmployee = function(){
    console.log('filtering employee: ', $scope.filteremployee);  
    $scope.employeeList = $filter('filter')(testArrayOfJson, $scope.filteremployee);
  };
  
  $scope.addEmployee = function(){
    console.log('employee: ', $scope.employee);
    testArrayOfJson.push($scope.employee);
    $scope.employeeList = testArrayOfJson;
    $scope.employee = {};
  };
  
});