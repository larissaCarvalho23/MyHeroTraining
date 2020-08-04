angular.module('myHeroTraining').controller('TreinoController',function ($scope) {
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
    $scope.desabilita = function () {
            return false;
    }
  var cro = function () {

      var countDownDate = new Date("August 3, 2020 09:00:00").getTime();

      // Update the count down every 1 second
      var x = setInterval(function () {

          // Get todays date and time
          var now = new Date().getTime();

          // Find the distance between now an the count down date
          var distance = countDownDate -now;

          // Time calculations for days, hours, minutes and seconds

          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Display the result in the element with id="demo"
          document.getElementById("dday").innerHTML =  hours + " horas "
              + minutes + " minutos " + seconds + " segundos ";

          // If the count down is finished, write some text
      }, 1000);
  }
  cro();
});
