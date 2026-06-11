const etapas = [

    {
        pergunta: "PERGUNTA 1",
        resposta: "resposta1"
    },

    {
        pergunta: "PERGUNTA 2",
        resposta: "resposta2"
    },

    {
        pergunta: "PERGUNTA 3",
        resposta: "resposta3"
    },

    {
        pergunta: "PERGUNTA 4",
        resposta: "resposta4"
    },

    {
        pergunta: "PERGUNTA 5",
        resposta: "resposta5"
    }

];

let etapaAtual = 0;

const pergunta = document.getElementById("pergunta");
const resposta = document.getElementById("resposta");
const botao = document.getElementById("continuar");
const mensagem = document.getElementById("mensagem");
const contador = document.getElementById("contador");

function atualizarProgresso() {

    const bolinhas = document.querySelectorAll(".bolinha");

    bolinhas.forEach((bolinha, index) => {

        if (index <= etapaAtual) {

            bolinha.classList.add("ativa");

        } else {

            bolinha.classList.remove("ativa");

        }

    });

}

function carregarEtapa() {

    pergunta.style.opacity = 0;

    setTimeout(() => {

        pergunta.innerText = etapas[etapaAtual].pergunta;

        contador.innerText = `Memória ${etapaAtual + 1} de ${etapas.length}`;

        resposta.value = "";

        mensagem.innerText = "";

        atualizarProgresso();

        pergunta.style.opacity = 1;

        resposta.focus();

    }, 200);

}

function finalizar() {

    document.querySelector(".progresso").style.display = "none";

    contador.style.display = "none";

    resposta.style.display = "none";

    botao.style.display = "none";

    pergunta.innerHTML = `
        Todas as memórias foram encontradas.
        <br><br>
        ♡
        <br><br>
        Cada passo levou a uma lembrança.
        <br>
        Cada lembrança levou até aqui.
        <br><br>
        Espero que este presente faça você sorrir
        tanto quanto você faz comigo.
    `;

    pergunta.style.fontSize = "30px";

    mensagem.innerHTML = `
        <br>
        <strong>Presente desbloqueado.</strong>
    `;
}

function verificarResposta() {

    const valor = resposta.value.trim().toLowerCase();

    const correta = etapas[etapaAtual].resposta.trim().toLowerCase();

    if (valor === correta) {

        mensagem.innerText = "Memória encontrada.";

        setTimeout(() => {

            etapaAtual++;

            if (etapaAtual >= etapas.length) {

                finalizar();

            } else {

                carregarEtapa();

            }

        }, 700);

    }

    else {

        mensagem.innerText = "Talvez exista outra resposta.";

        resposta.value = "";

    }

}

botao.addEventListener("click", verificarResposta);

resposta.addEventListener("keydown", function(e){

    if(e.key === "Enter"){

        verificarResposta();

    }

});

carregarEtapa();
