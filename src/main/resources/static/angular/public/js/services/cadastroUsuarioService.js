angular.module('myHeroTraining').factory('cadastroService', function ($http) {
    var incluir = function (model) {

        var jwt = localStorage.getItem("Bearer");

        $http.defaults.headers.common.Authorization = 'Bearer ' + jwt;
        return $http.post('/cadastro-usuario', model);

    }
    var email = function (email) {
        return $http.post('/email', email);
    }
    return {
        incluir: incluir,
        email: email
    }
});