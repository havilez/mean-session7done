// app.js

var helloWorldApp = angular.module('helloWorldApp', 
    [
    'ngRoute',   
    'helloWorldControllers' 
    ]);

helloWorldApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'partials/main.html',
            controller: 'MainCtrl'
        }).when('/show', {
            templateUrl: 'partials/show.html',
            controller: 'ShowCtrl'
        }).otherwise({ 
            templateUrl: 'partials/404.html',
            controller: 'FourCtrl'
        });
    }]);


// controllers.js

var helloWorldControllers = angular.module('helloWorldControllers', []);

helloWorldControllers.controller('MainCtrl', ['$scope',
    function MainCtrl($scope) {
        $scope.pageClass = 'page-home';
        $scope.message = "Hello World";
    }]);

helloWorldControllers.controller('ShowCtrl', ['$scope',
    function ShowCtrl($scope) {
        $scope.pageClass = 'page-about';
        $scope.message = "Show The World";
    }]);

helloWorldControllers.controller('FourCtrl', ['$scope',
    function FourCtrl($scope) {
        $scope.pageClass = 'page-404';
        $scope.message = "404 - you are lost!";
    }]);