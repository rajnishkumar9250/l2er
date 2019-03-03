angular.module('learn2earn')
.controller('headerCtrl', function($scope, $filter){
  $scope.selectMenu = function(event){
    $('.menuOption li').removeClass('active');
    $(event.currentTarget).addClass('active');
  };
  
});