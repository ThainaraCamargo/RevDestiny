const elementResposta = document.querySelector("#resposta")
const input = document.querySelector("input")
const botao = document.querySelector("#button")
const respostas = [
  "Sim",
  "Não",
  "Talvez",
  "Em breve",
  "Provável que não",
  "Provável que sim",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
];

function fazerPergunta() {

  if(input.value == "") {
    alert("Digite sua pergunta")
    return;
  } else {
    console.log("Cliquei no botão")

    botao.setAttribute("disabled", true);  

    const pergunta = "<div>" + input.value + "</div>"

    const totalRespostas = respostas.length;
    const respostaAleatoria = Math.floor(Math.random() * totalRespostas);

    elementResposta.innerHTML = pergunta + respostas[respostaAleatoria];

    elementResposta.style.opacity = 1;

    setTimeout(function () {
      elementResposta.style.opacity = 0;
      botao.removeAttribute("disabled");
    }, 3000);
  }
}

  