angular.module('myHeroTraining').controller('TreinoController',function ($scope, $http, myHeroTraining) {
    $scope.fotos =[
        {url: 'https://i0.statig.com.br/bancodeimagens/54/ab/3d/54ab3dww9e6ktcnafkfdp4294.jpg'},
        {url:'https://sportlife.com.br/wp-content/uploads/2018/12/beneficios-do-abdominal.jpg'},
        {url:'https://uploads.metropoles.com/wp-content/uploads/2018/07/25161248/138.jpg'},
        {url:'https://www.runtastic.com/blog/wp-content/uploads/2019/03/thumbnail_1200x800.jpg'},
        {url:'https://www.bodynutry.ind.br/images/noticias/grd/71ba53d6fccbc4aeeb2aee3c4dc21281.jpg'},
        {url:'https://conteudo.imguol.com.br/c/entretenimento/a7/2016/05/30/homem-fazendo-flexao-1464620034199_v2_1920x1279.jpg'}
        ];
  var carrega = function (){
      myHeroTraining.carregarTreinos().success(function (data) {
          console.log(data)
          $scope.treinos = data;
      });

  };
  carrega()

    $scope.fotoPrincipal =

      {url:'https://i.pinimg.com/236x/ba/87/5d/ba875dc13ef3651e4f08237d07f8ea45.jpg'}


});
