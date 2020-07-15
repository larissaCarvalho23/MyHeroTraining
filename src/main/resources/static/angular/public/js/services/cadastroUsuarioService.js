angular.module('myHeroTraining').factory('cadastroService',function ($http){
    var incluir = function (model) {
        return  $http.post('http://localhost:8080/cadastro-usuario',model);
    };

    var email = function (email) {
        return $http.post('http://localhost:8080/email',email);
    }
    return{

        incluir : incluir,
        email  : email

    }
});