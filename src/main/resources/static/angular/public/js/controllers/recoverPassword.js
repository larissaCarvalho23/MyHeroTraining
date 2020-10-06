angular.module('myHeroTraining').controller('recoverPassword',function ($scope, $location, cadastroService ) {
    $scope.recuperarSenha = function () {
        console.log("clickclick")

        function successCallback() {
            console.log("sucesso")
            $location.path('/success-reset');
        }

        function errorCallback() {
            console.log("erro")
        }

        cadastroService.recuperar($scope.model.email).then(successCallback, errorCallback)
    }
})