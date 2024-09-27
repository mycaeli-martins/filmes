let campoIdade;
let campoRomance;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "@mycaeli-martins");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoRomance = createCheckbox("Gosta de filmes de romance");
  campoAventura = createCheckbox("Gosta de filmes sobre amores?");
}

function draw() {
  background("#8BC34A");
  let idade = campoIdade.value();
  let gostaDeRomance = campoRomance.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeRomance, gostaDeAventura);

  fill(color(4, 11, 14));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeRomance, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "lydia, allison,malia,kira";
    } else {
      if (idade >= 12) {
        if(gostaDeRomance || gostaDeAventura) {
          return "Github-mycaeli";          
        } else{
         return "Programando com html e css";
        }
      } else {
        if (gostaDeRomance) {
          return "Tele hackers";
        } else {
          return "Nenhum sistema é 100% seguro";
        }
      }
    }
  } else {
    if (gostaDeRomance) {
      return "@mycaeli-martins";
    } else {
      return "Todo Hacker tem um início";
    }
  }
}
