angular.module('myHeroTraining').factory('loginService',function ($http){
    var autenticar = function (dadosUsuario) {

       return $http.post('/auth',dadosUsuario)
    }
    var dadosCadastro = function (email) {
        return $http.get('/cadastro-usuario', {
            params: {
                email: email
            }

        });
    };
            return{

          autenticar : autenticar,
        dadosCadastro : dadosCadastro

    }
});