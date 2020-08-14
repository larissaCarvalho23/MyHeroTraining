angular.module('myHeroTraining').controller('TreinoController',function ($scope, $routeParams,myHeroTraining) {
    $scope.model = {
    }
    $scope.fotos =[
        {url: 'https://i0.statig.com.br/bancodeimagens/54/ab/3d/54ab3dww9e6ktcnafkfdp4294.jpg'}];

    $scope.fotoP =[
        {
            url:'https://gooutside-static-cdn.akamaized.net/wp-content/uploads/sites/3/2020/03/treino-e-dicas-para-se-manter-em-forma-em-casa.jpg'},
       ];
    $scope.fotoX =[
    {url:'https://www.runtastic.com/blog/wp-content/uploads/2019/03/thumbnail_1200x800.jpg'},
    {url:'https://www.bodynutry.ind.br/images/noticias/grd/71ba53d6fccbc4aeeb2aee3c4dc21281.jpg'},
    {url:'https://conteudo.imguol.com.br/c/entretenimento/a7/2016/05/30/homem-fazendo-flexao-1464620034199_v2_1920x1279.jpg'}
];
    $scope.foto = {
        urlx:'angular/public/imagem/Chega%20de%20desculpas_%20malhe%20fora%20da%20academia.gif'
    }
    var idTreino = $routeParams.id;
    $scope.desabilita = function () {
            return false;
    }
    $scope.prevPage = function(page){
        if($scope.currentPage-1 > 0){
            $scope.changePage(page);
        }
    }

    $scope.nextPage = function(page){
        if($scope.currentPage+1 <= $scope.numberOfPages){
            $scope.c.hangePage(page);
        }
    }
    $scope.iniciar = function () {
    myHeroTraining.carregarTreinos(idTreino)
    }


});
