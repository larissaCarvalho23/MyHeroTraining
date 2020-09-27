angular.module('myHeroTraining').controller('login-controller',function ($scope,loginService,$location) {
$scope.model= {}
var id_usuario;
    $scope.logar = function () {
        loginService.autenticar($scope.model).success(function (data) {
            localStorage.setItem(data.tipo,data.token);
            carregaDadosLogin($scope.model.email);
            alert("Bem vindo!!!")
            $location.path('/home');
        }).error(function (status) {
            alert("Dados de Login inválidos")
            $location.path('/login');
        });
    }
    var carregaDadosLogin = function (email) {
    loginService.dadosCadastro(email).success(function (data) {
        $scope.dados = data;
        console.log()
        id_usuario = data[0].id;
        var token = localStorage.getItem('Bearer')

        UpdateToken(id_usuario,token);
    });
    }
    var UpdateToken = function(id,token){
        loginService.atualizaToken(id,token).success(function (data) {

        });
    };

});
