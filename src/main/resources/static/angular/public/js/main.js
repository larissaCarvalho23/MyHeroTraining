angular.module('myHeroTraining', ['ngRoute']).config(function($routeProvider) {

      //  $locationProvider.html5Mode(true);

        $routeProvider.when('/home', {
            templateUrl: 'angular/public/view/home.html',
            controller: 'HomeController',

        });
        $routeProvider.when('/principal', {
            templateUrl: 'angular/public/view/principal.html',
            controller: 'TreinoController',

        });
        $routeProvider.when('/Cadastro', {
            templateUrl: 'angular/public/view/Cadastro.html',
            controller: 'cadastroController'

        });
        $routeProvider.when('/login', {
            templateUrl: 'angular/public/view/login.html',
            controller: 'login-controller'

        });
        $routeProvider.when('/dados_login', {
            templateUrl: 'angular/public/view/dadosLogin.html',
            controller: 'TreinoController'

        });
        $routeProvider.when('/treinos/:id', {
            templateUrl: 'angular/public/view/treino.html',
            controller: 'TreinoController'

        });
        $routeProvider.when('/treino/inicio/:id', {
            templateUrl: 'angular/public/view/inicioTreino.html',
            controller: 'TreinoController'

        });
        $routeProvider.when('/treino/inicio/execucao', {
        templateUrl: 'angular/public/view/TreinoExecucao.html',
        controller: 'TreinoController'

    });

       $routeProvider.otherwise({redirectTo:'/home'});

    });