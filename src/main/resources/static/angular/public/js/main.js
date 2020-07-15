angular.module('myHeroTraining', ['ngRoute'])
    .config(function($routeProvider) {

      //  $locationProvider.html5Mode(true);

        $routeProvider.when('/home', {
            templateUrl: 'angular/public/view/home.html',
            controller: 'HomeController',
            titulo : 'home'
        });
        $routeProvider.when('/Cadastro', {
            templateUrl: 'angular/public/view/Cadastro.html',
            controller: 'cadastroController'

        });
        $routeProvider.when('/login', {
            templateUrl: 'angular/public/view/login.html',
            controller: 'login-controller'

        });


        $routeProvider.otherwise({redirectTo:'/home'});

    });