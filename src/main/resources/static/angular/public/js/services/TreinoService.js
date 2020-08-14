angular.module('myHeroTraining').factory('myHeroTraining',function ($http) {

var carregaTreinos = function (qnt,pg) {
    return  $http.get('/treinos',qnt,pg);
};
return{
    carregarTreinos : carregaTreinos
    }
});