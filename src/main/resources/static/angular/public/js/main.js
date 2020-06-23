angular.module('myHeroTraining', ['ngRoute'])
    .config(function($routeProvider) {

        $routeProvider.when('/home', {
            templateUrl: 'angular/public/view/home.html',
            controller: 'TreinoController'
        });
    });