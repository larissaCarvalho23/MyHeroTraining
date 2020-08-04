angular.module('myHeroTraining').controller('login-controller',function ($scope,loginService,$location) {
$scope.model= {}
    $scope.logar = function () {
        loginService.autenticar($scope.model).success(function (data) {
            localStorage.setItem(data.tipo,data.token);
            alert("Bem vindo!!!")
            $location.path('/home');
        }).error(function (status) {
            alert("Dados de Login inválidos")
            $location.path('/login');
        });
    }
});
