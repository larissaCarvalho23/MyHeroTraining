angular.module('myHeroTraining').factory('myHeroTraining',function ($http) {

var carregaTreinos = function () {
    return  $http.get('http://localhost:8080/treinos');
};
return{
    carregarTreinos : carregaTreinos
    }
});