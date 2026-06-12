const etapas = [
    {
        pergunta: "Antes de existir um caminho, existiu um primeiro passo.",
        respostas: ["16/05", "16-05", "16 de maio"]
    },

    {
        pergunta: "Existem viagens que não precisam de estrada. Procure onde as histórias descansam, e a próxima página estará esperando.",
        respostas: [
            "matéria escura",
            "materia escura",
            "livro matéria escura",
            "livro materia escura"
        ]
    },

    {
        pergunta: "Algumas respostas não florescem depressa. Procure onde a terra encontra o céu e a vida insiste em recomeçar.",
        respostas: [
            "dália",
            "dalia",
            "flor dália",
            "flor dalia"
        ]
    },

    {
        pergunta: "Há lugares que guardam o mundo inteiro sem sair do lugar. Aproxime-se de onde a luz gosta de entrar.",
        respostas: [
            "legal",
            "janela",
            "perto da janela"
        ]
    },

    {
        pergunta: "O tempo costuma confiar seus segredos a quem sabe esperar. Procure onde as lembranças são guardadas a sete chaves.",
        respostas: [
            "te amo",
            "eu te amo",
            "amo você",
            "amo voce"
        ]
    }
];

let etapaAtual = 0;

const dots = document.querySelectorAll(".dot");
const pergunta = document.getElementById("pergunta");
const resposta = document.getElementById("resposta");
const mensagem = document.getElementById("mensagem");

function normalizar(texto) {
    return texto
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

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
    const valor = normalizar(resposta.value);

    const respostasValidas = etapas[etapaAtual].respostas.map(r =>
        normalizar(r)
    );

    console.log("Etapa:", etapaAtual + 1);
    console.log("Digitado:", valor);
    console.log("Respostas aceitas:", respostasValidas);

    if (respostasValidas.includes(valor)) {
        console.log("Resposta correta!");

        etapaAtual++;

        if (etapaAtual >= etapas.length) {
            finalizar();
        } else {
            carregar();
        }
    } else {
        console.log("Resposta incorreta!");

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
