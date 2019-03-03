var app = angular.module('learn2earn', ['ui.router', '720kb.datepicker']);
console.log('app: ', app);
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state("home", 
          {
            url: '/home',
            templateUrl: '/views/home.html',
            controller: 'homeCtlr',
          })
    .state("class", 
          {
            url: '/class',
            templateUrl: '/views/class.html',
            controller: 'classCtlr',
          })
    .state("project", 
          {
            url: '/project',
            templateUrl: '/views/project.html',
            controller: 'projectCtlr',
          })
    .state("contact", 
          {
            url: '/contact',
            templateUrl: '/views/contact.html',
            controller: 'contactCtlr',
          })
    .state("about", 
          {
            url: '/about',
            templateUrl: '/views/about.html',
            controller: 'aboutCtlr',
          })
    .state("classdetail", 
          {
            url: '/classdetail/:id',
            templateUrl: '/views/classdetail.html',
            controller: 'classdetailCtlr',
          })
    .state("requestforclass", 
          {
            url: '/requestforclass',
            templateUrl: '/views/requestforclass.html',
            controller: 'requestforclassCtlr',
          })
    .state("projectdetail", 
          {
            url: '/projectdetail/:id',
            templateUrl: '/views/projectdetail.html',
            controller: 'projectdetailCtlr',
          })
    .state("requestforproject", 
          {
            url: '/requestforproject',
            templateUrl: '/views/requestforproject.html',
            controller: 'requestforprojectCtlr',
          })
    .state("pagenotfound", 
          {
            url: '/pagenotfound',
            templateUrl: '/views/pagenotfound.html',
          });
  $urlRouterProvider.otherwise('/home');
}])
.run(function($state){
 // $state.go('home');
}).config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('headerIntercepter');
}]);