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
    return{

    carregarTreinos : carregaTreinos


    }
});