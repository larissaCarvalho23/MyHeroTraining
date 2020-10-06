angular.module('myHeroTraining').controller('HomeController',function ($scope, $http, myHeroTraining,$location) {
    $scope.fotos =[
    	{url:'angular/public/imagem/home1.jpg'},
        {url:'angular/public/imagem/home2.jpg'},
        {url:'angular/public/imagem/home3.jpg'},
        {url:'angular/public/imagem/home4.jpg'},
        {url:'angular/public/imagem/home5.jpg'},
        {url:'angular/public/imagem/home6.jpg'},


        ];
    $scope.model = {
    }

  $scope.exibirSemLogin = function () {
        if(localStorage.getItem('Bearer') == null){
            return true;
        }
    };
    $scope.exibircomLogin = function(){
        if(localStorage.getItem('Bearer') !== null){
            return true;
        }
    }
   var carrega = function (){
        var pagina = 0;
        var qnt =1;
      myHeroTraining.carregarTreinos(pagina,qnt).success(function (data) {
          $scope.treinos = data.content;
      });

  };
    $scope.inicio = function () {
        alert("kkkkkkkkkk")
        var pagina = 0;
        var qnt = 1;
        alert("ddd")
        myHeroTraining.carregarTreinos(pagina, qnt, idTreino).success(function (data) {
            $scope.treinos = data.content;
            console.log(data.content);


        });
    }

   var dadosLogin = function(){
       myHeroTraining.carregaDados().success(function (data) {

       })

   }
    $scope.logout = function(){

    localStorage.clear();
    sessionStorage.clear();
    $location.path('/login');
  }
    dadosLogin();
    carrega()
    $scope.fotoPrincipal =
      {url:'https://i.pinimg.com/236x/ba/87/5d/ba875dc13ef3651e4f08237d07f8ea45.jpg'}
});
