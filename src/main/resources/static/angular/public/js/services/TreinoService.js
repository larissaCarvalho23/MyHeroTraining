angular.module('myHeroTraining').factory('TreinoService', function ($http) {
    var carregaTreinos = function (qnt, pg) {
        return $http.get('/treinos', qnt, pg);
    };
    var carregaFases = function (id) {
        return $http.get('/fase', {
            params: {
                id: id
            }
        });
    };
    var carregaExercicios = function (id, pagina, qnt) {
        return $http.get('/exercicio', {
            params: {
                id: id,
                pagina :pagina,
                qnt :qnt
            }
        });
    };
    var carregaIdTreino = function (id) {
        return $http.get('/fase/treino', {
            params: {
                id: id
            }
        });
    };
    var atualizaFaseConcluida = function (id,faseConcluida) {
        return $http.put('/fase/' +id, faseConcluida)

    }
    var atualizaIdusuarioTreino = function (id,model) {
        return $http.put('/treino/'+id, {
            params:{
                model :model
            }
        })
    }
   /* var buscaIdUsuario = function (token) {
        return $http.get('/usuario',token)
    }*/
    var buscaTreinosFeitos = function (IdUsuario) {
        return $http.get('/treinos/recupera', {
            params:{
                IdUsuario :IdUsuario
            }
        });
    }
    var atualizaIdUsuario = function (faseConcluida) {
        return $http.put('fase',
            {
                params:{
                    faseConcluida :faseConcluida
                }
            })
    }
    return {
        carregarTreinos: carregaTreinos,
        carregaFases: carregaFases,
        carregaExercicios :carregaExercicios,
        carregaIdTreino : carregaIdTreino,
        atualizaFaseConcluida : atualizaFaseConcluida,
        atualizaIdusuarioTreino : atualizaIdusuarioTreino,
      //  buscaIdUsuario : buscaIdUsuario,
        buscaTreinosFeitos : buscaTreinosFeitos,
        atualizaIdUsuario : atualizaIdUsuario
    }
});