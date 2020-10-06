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

    $routeProvider.when('/confirm-reset', {
        templateUrl: 'angular/public/view/confirmReset.html',
        controller: 'cadastroController'
    });

    $routeProvider.when('/success-reset', {
        templateUrl: 'angular/public/view/successForgotPassword.html'
    });

        $routeProvider.when('/forgot-password', {
            templateUrl: 'angular/public/view/forgotPassword.html',
            controller: 'recoverPassword'

        });
        $routeProvider.when('/login', {
            templateUrl: 'angular/public/view/login.html',
            controller: 'login-controller'

        });
        $routeProvider.when('/account-verified', {
        templateUrl: 'angular/public/view/accountVerified.html',

         });

        $routeProvider.when('/account-verified-error', {
            templateUrl: 'angular/public/view/accountVerifiedError.html',

        });

        $routeProvider.when('/confirm-account', {
            templateUrl: 'angular/public/view/accountVerified.html',
            controller: 'confirmEmail'
        });

        $routeProvider.when('/dados_login', {
            templateUrl: 'angular/public/view/dadosLogin.html',
            controller: 'login-controller'

        });
        $routeProvider.when('/treinos/:id', {
            templateUrl: 'angular/public/view/treino.html',
            controller: 'TreinoController'

        });
        $routeProvider.when('/treino/inicio', {
            templateUrl: 'angular/public/view/inicioTreino.html',
            controller: 'TreinoController'

        });
        $routeProvider.when('/treino/inicio/execucao', {
        templateUrl: 'angular/public/view/TreinoExecucao.html',
        controller: 'TreinoController'
    });

       $routeProvider.otherwise({redirectTo:'/home'});

    });