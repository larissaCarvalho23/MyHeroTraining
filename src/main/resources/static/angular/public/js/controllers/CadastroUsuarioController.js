angular.module('myHeroTraining').controller('cadastroController',function ($scope,$route, cadastroService ) {
$scope.model = {
    }
    $scope.salvar = function () {
      if($scope.formulario.$valid) {
      cadastroService.incluir($scope.model).success(function (data) {
            alert("Cadastro realizado com sucesso!");
              $route.reload();
             enviarEmail();
<<<<<<< HEAD
             usuarioCadastro();
=======
          usuarioCadastro();
>>>>>>> criacao-fluxo-treinos
          }).error(function (data,status) {
                alert("Email já cadastrado!");
            $route.reload();
      });
            //fazer tratamento de erro caso não retorno com sucess
      }

      else if ($scope.formulario.$invalid) {
          alert("Dados inválidos");
      }
    };
        var enviarEmail = function () {
        cadastroService.email($scope.model.email).success(function (data) {
        });
     }
<<<<<<< HEAD
     var usuarioCadastro = function () {
        cadastroService.usuario($scope.model)

     }
     usuarioCadastro();


  $(document).ready(function(){
  $('#pp').mask('000.00');
 
 });

 $(document).ready(function(){
  $('#pap').mask('0.00');
 
 });
});

 
=======
    var usuarioCadastro = function () {
        cadastroService.usuario($scope.model)

    }
});
>>>>>>> criacao-fluxo-treinos
