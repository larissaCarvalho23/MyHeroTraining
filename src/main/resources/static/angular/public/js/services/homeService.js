angular.module('myHeroTraining').factory('myHeroTraining',function ($http) {

    var carregaTreinos = function (pagina,qnt,id) {
    return  $http.get('/treinos',{
        params:{
           pagina : pagina,
           qnt : qnt,
            id: id
        }
    });
};
    var carregaDados = function () {
        return $http.get('/cadastro-usuario')
    }
    return{

    carregarTreinos : carregaTreinos,
    carregaDados : carregaDados

    }
});