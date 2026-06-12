const etapas = [
    {
        pergunta: "Antes de existir um caminho, existiu um primeiro passo.",
        resposta: "16/05"
    },

    {
        pergunta: "Existem viagens que não precisam de estrada. Procure onde as histórias descansam, e a próxima página estará esperando.",
        resposta: "Matéria escura"
    },

    {
        pergunta: "Algumas respostas não florescem depressa. Procure onde a terra encontra o céu e a vida insiste em recomeçar.",
        resposta: "Dália"
    },

    {
        pergunta: "Há lugares que guardam o mundo inteiro sem sair do lugar. Aproxime-se de onde a luz gosta de entrar.",
        resposta: "Legal"
    },

    {
        pergunta: "O tempo costuma confiar seus segredos a quem sabe esperar. Procure onde as lembranças são guardadas a sete chaves.",
        resposta: "Te Amo"
    }
];

let etapaAtual = 0;

const dots = document.querySelectorAll(".dot");
const pergunta = document.getElementById("pergunta");
const resposta = document.getElementById("resposta");
const mensagem = document.getElementById("mensagem");

function atualizarBolinhas() {
    dots.forEach((dot, index) => {
        if (index <= etapaAtual) {
            dot.classList.add("ativo");
        } else {
            dot.classList.remove("ativo");
        }
    });
}

function carregar() {
    atualizarBolinhas();

    pergunta.style.opacity = 0;

    setTimeout(() => {
        pergunta.textContent = etapas[etapaAtual].pergunta;
        pergunta.style.opacity = 1;

        resposta.value = "";
        mensagem.textContent = "";

        resposta.focus();
    }, 180);
}

function verificar() {
    const valor = resposta.value.trim().toLowerCase();
    const correta = etapas[etapaAtual].resposta.toLowerCase();

    if (valor === correta) {
        etapaAtual++;

        if (etapaAtual >= etapas.length) {
            finalizar();
        } else {
            carregar();
        }
    } else {
        mensagem.textContent = "Tente novamente.";
        resposta.value = "";
    }
}

function finalizar() {
    document.querySelector(".info").style.display = "none";
    resposta.style.display = "none";
    mensagem.style.display = "none";

    atualizarBolinhas();

    pergunta.innerHTML = `
        Você chegou até aqui.

        <br><br>

        ♡

        <br><br>

        Seu presente está esperando.
    `;
}

resposta.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        verificar();
    }
});

carregar();
