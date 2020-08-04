angular.module('myHeroTraining').factory('myHeroTraining',function ($http) {

var carregaTreinos = function () {
    return  $http.get('/treinos');
};
return{
    carregarTreinos : carregaTreinos
    }
});