angular.module('myHeroTraining').controller('TreinoController', function ($scope, $routeParams, TreinoService, $location) {
    $scope.model = {}
    $scope.fotos = [
        {url: 'https://i0.statig.com.br/bancodeimagens/54/ab/3d/54ab3dww9e6ktcnafkfdp4294.jpg'}];

    $scope.fotoP = [
        {
            url: 'https://gooutside-static-cdn.akamaized.net/wp-content/uploads/sites/3/2020/03/treino-e-dicas-para-se-manter-em-forma-em-casa.jpg'
        },
    ];
    $scope.fotoX = [
        {url: 'https://www.runtastic.com/blog/wp-content/uploads/2019/03/thumbnail_1200x800.jpg'},
        {url: 'https://www.bodynutry.ind.br/images/noticias/grd/71ba53d6fccbc4aeeb2aee3c4dc21281.jpg'},
        {url: 'https://conteudo.imguol.com.br/c/entretenimento/a7/2016/05/30/homem-fazendo-flexao-1464620034199_v2_1920x1279.jpg'}
    ];
    $scope.foto = {
        urlx: 'angular/public/imagem/Chega%20de%20desculpas_%20malhe%20fora%20da%20academia.gif'
    }
    var id = $routeParams.id;
    var conlusao;
    var exibeBotao = 1;
    var idTreino;
    //tirar do set
    var idUsuario =1;
    var faseTerminadas = [];
    var treinosRealizados=[];
    var liberarProxFase;
    var idFase;
    var quantidadeFases;
    var liberarTodasFases;

    $scope.desabilita = function () {
        return false;
    }
    $scope.concluir = function () {
        if (conlusao === 1) {
            return true;
        }
    }
    //função botão iniciar
    $scope.iniciar = function () {
        TreinoService.carregaExercicios(id).success(function (data) {
            var total = data.totalElements;
            var pag = total - 1;
            var qtd = 1
            //não exibe mais a opçao de inicio
            exibeBotao = 0;
            exericioPaginacao(id, pag, qtd)
        });
    }
    //exbibe botão de iniciar
    $scope.inicia = function () {
        if (exibeBotao === 1)
            return true;
    }
    $scope.prox = function () {
        if (exibeBotao === 0)
            return true;
    }
    $scope.final = function () {
        if (exibeBotao === -1)
            return true;
    }
    /*var recuperaIdUsuario = function () {
        var token = sessionStorage.getItem("Bearer");
        TreinoService.buscaIdusuario(1).success(function (data) {
            //passar aqui na data
            idUsuario = data;
        });
    }*/
    //recuperaIdUsuario();
    var pagina;
    $scope.proximo = function () {
        TreinoService.carregaExercicios(id).success(function (data) {
            if (pagina === undefined) {
                pagina = 1;
            }
            var total = data.totalElements - 1;
            var pag = total - pagina;
            var qtd = 1
            if (pag === 0) {
                exibeBotao = -1;
            }
            if (pag === -1) {
                conlusao = 1;
            }
            exericioPaginacao(id, pag, qtd)
            pagina += 1;
        });

    }
    var exericioPaginacao = function (id, pagina, qnt) {
        TreinoService.carregaExercicios(id, pagina, qnt).success(function (data) {
            $scope.exercicios = data.content;
        });
    }
    var fasesTreinos = function () {
        TreinoService.carregaFases(id).success(function (data) {
            $scope.fases = data;
            quantidadeFases = data.length;

        });
    }
    //falta pegar Id do usuario do banco e passar no parametro, pelo token
    //falta salvar id na tabela
    //true ?Ok
    var buscaTreinosFeito = function () {
        TreinoService.buscaTreinosFeitos(1).success(function (data) {
            for (var j = 0; j < data.length; j++) {
                treinosRealizados.push(data[j].id)
                TreinoService.carregaFases(treinosRealizados).success(function (data) {
                    for (var i = 0; i < data.length; i++) {
                        console.log(data.length)
                        console.log(data)
                        if (data[i].faseConcluida === true)
                            faseTerminadas.push(data[i].id)

                    }

                });
            }
        });
    }
    buscaTreinosFeito();
    var exerciciosFase = function () {
        TreinoService.carregaExercicios(id).success(function (data) {
            $scope.exercicios = data.content;
        });
    }
    //marcar check-box
    $scope.item = function (valor) {
        for (var i = 0; i <= faseTerminadas.length; i++) {

            if (faseTerminadas.indexOf(valor) != -1)    {
                return true;
            }
        }
        //valor igual a
        //BUDCAR NO BANCO TODOS OS VALORES IGUAL A TRUE
        //busca o primeiro ID daquele liest de fases prga array --liberar sempre a fase 1
        //faseTerminadas.indexOf(primeiro_fase === -1)//não tenho a primeira fase feita
        //return false
    };
    //logica de habilitar e desabilitar fases
    $scope.desabilita = function (valor) {

       // for (var i = 0; i <= faseTerminadas.length; i++) {
            var ProximaFase = faseTerminadas[0];
            if (valor ===1 ||faseTerminadas.indexOf(valor) === -1 && valor === parseInt(ProximaFase)+ parseInt(1)

                || quantidadeFases === valor && liberarTodasFases === true ) {
                return false;
            }
          //liberar proxima fase pode ser um ou com a proxima condição
            else {
                faseTerminadas.indexOf(valor) != -1
                    return true;
            }

        return false;
    }
    var atualizaFaseBanco = function (idFase) {
        var faseConcluida = true;
        TreinoService.atualizaFaseConcluida(idFase, faseConcluida).success(function (data) {
        });
    }
    var atualizaIdusuarioTreino = function () {
        TreinoService.atualizaIdusuarioTreino(idUsuario).success(function (data) {
        });
    }
    $scope.finalizar = function () {
        //buscar id treino para passar no laction path-ok
        //UPDATE no banco o campo true;
        //UPDATE COM ID DO USUARIO
        //select campo x where id seja igual ao id do usuario

        atualizaIdusuarioTreino();
        liberarProxFase=true;
        idFase = parseInt(id) + parseInt(1);
        if (quantidadeFases === id){
            liberarTodasFases = true;
        }
        //atualiza id funcionario
            TreinoService.carregaIdTreino(id).success(function (data) {
            idTreino = data[0].treino.id;
            alert(id);
            alert(idFase);
            $location.path('treinos/' + idTreino);
        });
    }
    exerciciosFase();
    fasesTreinos();
console.log(faseTerminadas)
    atualizaFaseBanco(id);
});
