angular.module('myHeroTraining').controller('TreinoController', function ($scope, $routeParams, TreinoService, $location) {
    var id = $routeParams.id;
    var conlusao;
    var exibeBotao = 1;
    var idFase;
    var faseTerminadas = [];
    var treinosRealizados = [];
    var liberarProxFase;
    var idFase;
    var quantidadeFases;
    var liberarTodasFases;
    var primeirafase = [];
    var liberar;
    var repeticaoExercicio = 0;
    var IdUsuario = sessionStorage.getItem('id');
    $scope.desabilita = function () {
        return false;
    }
    $scope.concluir = function () {
        if (conlusao === 1) {
            return true;
        }
    }
    /*  //função botão iniciar
      $scope.iniciar = function () {
          TreinoService.carregaExercicios(id).success(function (data) {
              var total = data.totalElements;
              var pag = total - 1;
              var qtd = 1
              //não exibe mais a opçao de inicio
              exibeBotao = 0;
              exericioPaginacao(id, pag, qtd)
              liberar = true;
          });
      }*/

    //exbibe botão de iniciar
    /*$scope.inicia = function () {
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
    }*/
    /*var recuperaIdUsuario = function () {
        var token = sessionStorage.getItem("Bearer");
        TreinoService.buscaIdusuario(1).success(function (data) {
            //passar aqui na  data
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
        TreinoService.carregaFasesTreino(id).success(function (data) {
            $scope.fases = data;
            quantidadeFases = data.length;
            primeirafase = data[0];
        });
    }
    //falta pegar Id do usuario do banco e passar no parametro, pelo token
    //falta salvar id na tabela
    //true ?Ok
    var buscaTreinosFeito = function () {
        TreinoService.buscaTreinosFeitos(IdUsuario).success(function (data) {
            for (var j = 0; j < data.length; j++) {
                faseTerminadas.push(data[j].id)
            }

        });
    }
    buscaTreinosFeito();
    var exerciciosFase = function () {
        TreinoService.carregaExercicios(id).success(function (data) {
            $scope.exercicios = data;
            console.log(data)
        });
    }
    $scope.item = function (valor) {
        for (var i = 0; i <= faseTerminadas.length; i++) {
            if (faseTerminadas.indexOf(valor) != -1) {
                return true;
            }
        }
    };
    //logica de habilitar e desabilitar fases
    $scope.desabilita = function (valor) {
        var ProximaFase = faseTerminadas[faseTerminadas.length - 1]
        if (valor === 1 && faseTerminadas.indexOf(valor) === -1 || valor === primeirafase && faseTerminadas.indexOf(valor) === -1 || faseTerminadas.indexOf(valor) === -1 && valor === parseInt(ProximaFase) + parseInt(1) && faseTerminadas.indexOf(valor) === -1
            || quantidadeFases === valor && liberarTodasFases === true) {
            return false;
        } else {
            faseTerminadas.indexOf(valor) != -1 || faseTerminadas.indexOf(valor) === -1
            return true;
        }
    }
    var atualizaFaseBanco = function (idFase) {
        TreinoService.atualizaFaseConcluida(idFase).success(function (data) {
        });
    }
    var atualizaIdusuarioTreino = function () {

        var idFaseAtual = {
            id: id
        }
        TreinoService.atualizaIdusuarioTreino(IdUsuario, idFaseAtual).success(function (data) {
        });
    }
    $scope.finalizar = function () {
        repeticaoExercicio++;
        // liberarProxFase = true;
        idFase = parseInt(id) + parseInt(1);
        //  if (quantidadeFases === id) {
        //    liberarTodasFases = true;
        //}
        if (repeticaoExercicio < 3) {
            alert(repeticaoExercicio)
           TreinoService.carregaIdTreino(id).success(function (data) {
                idFase = data[0].id;
                let timerInterval
               document.getElementById('serieFeitas').innerHTML ="Número de repetições realizadas: " +repeticaoExercicio ;
               document.getElementById('img').style.filter =  'grayscale(100%)';
                Swal.fire({
                    title: 'Descanse!',
                    html: 'Você poderá repetir o mesmo exercicío em <b>30</b> segundos.',
                    timer: 30000,
                    allowOutsideClick: false,
                    timerProgressBar: true,
                    willOpen: () => {
                        Swal.showLoading()
                        timerInterval = setInterval(() => {
                            const content = Swal.getContent()
                            if (content) {
                                const b = content.querySelector('b')
                                if (b) {
                                    var texto = Swal.getTimerLeft()/1000
                                    var resultado  = texto.toString().substring(0,2);
                                    b.textContent = resultado;
                                }
                            }
                        }, 1000)
                    },
                    onClose: () => {
                        clearInterval(timerInterval)
                        Swal.fire({
                                title: 'Inicar Repetição',
                                icon: 'info',
                                text: ' Repetições realizadas: ' +repeticaoExercicio + ' de 3'
                            }
                        );
                        document.getElementById('img').style.filter =  '';
                        $location.path('treino/inicio/' + idFase);
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log('fechando o timer')
                    }
                })
                function refresh() {
                    setTimeout(function () {
                        location.reload();
                    }, 100);
                }
            });
        } else {
            TreinoService.carregaIdTreino(id).success(function (data) {
                idFase = data[0].id;
                alert("ola")
                //  atualizaFaseBanco(id);
                atualizaIdusuarioTreino();
                $location.path('treinos/' + idFase).reload();
            });
        }
    }
    var carrega = function () {
        TreinoService.fotoFase(id).success(function (data) {
            $scope.treinos = data;
        });
    };
    var carregaDdos = function () {
        TreinoService.dadosCadastro(IdUsuario).success(function (data) {
            $scope.infos = data;

        });
    };
    carrega();
    exerciciosFase();
    fasesTreinos();
    carregaDdos();
});