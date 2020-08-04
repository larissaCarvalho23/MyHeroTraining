angular.module('myHeroTraining').factory('loginService',function ($http){
    var autenticar = function (dadosUsuario) {

       return $http.post('http://localhost:8080/auth',dadosUsuario)
    }
    return{

        autenticar : autenticar

    }
});