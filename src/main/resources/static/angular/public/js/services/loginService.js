angular.module('myHeroTraining').factory('loginService',function ($http){
    var autenticar = function (dadosUsuario) {

       return $http.post('/auth',dadosUsuario)
    }
    var dadosCadastro = function (email) {
        return $http.get('/usuario', {
            params: {
                email: email
            }
        });
    };
    var atualizaToken = function (id,token) {
        return $http.put('/auth/'+id,
            {
                params: {
                    token:token
                }
            });
    }
      return{
       autenticar : autenticar,
      dadosCadastro : dadosCadastro,
      atualizaToken : atualizaToken

    }
});