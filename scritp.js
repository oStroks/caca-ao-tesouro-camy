const etapas = [

    {
        pergunta:"PERGUNTA 1",
        resposta:"resposta1"
    },

    {
        pergunta:"PERGUNTA 2",
        resposta:"resposta2"
    },

    {
        pergunta:"PERGUNTA 3",
        resposta:"resposta3"
    },

    {
        pergunta:"PERGUNTA 4",
        resposta:"resposta4"
    },

    {
        pergunta:"PERGUNTA 5",
        resposta:"resposta5"
    }

];

let etapaAtual = 0;

const dots = document.querySelectorAll(".dot");
const pergunta = document.getElementById("pergunta");
const resposta = document.getElementById("resposta");
const mensagem = document.getElementById("mensagem");

function atualizarBolinhas(){

    dots.forEach((dot,index)=>{

        if(index<=etapaAtual){

            dot.classList.add("ativo");

        }else{

            dot.classList.remove("ativo");

        }

    });

}

function carregar(){

    atualizarBolinhas();

    pergunta.style.opacity=0;

    setTimeout(()=>{

        pergunta.textContent=etapas[etapaAtual].pergunta;

        pergunta.style.opacity=1;

        resposta.value="";

        mensagem.textContent="";

        resposta.focus();

    },180);

}

function verificar(){

    let valor=resposta.value.trim().toLowerCase();

    let correta=etapas[etapaAtual].resposta.toLowerCase();

    if(valor===correta){

        etapaAtual++;

        if(etapaAtual>=etapas.length){

            finalizar();

        }else{

            carregar();

        }

    }else{

        mensagem.textContent="Tente novamente.";

        resposta.value="";

    }

}

function finalizar(){

    document.querySelector(".info").style.display="none";

    resposta.style.display="none";

    mensagem.style.display="none";

    atualizarBolinhas();

    pergunta.innerHTML=`

    Você chegou até aqui.

    <br><br>

    ♡

    <br><br>

    Seu presente está esperando.

    `;

}

resposta.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        verificar();

    }

});

carregar();const etapas = [

{
pergunta:"PERGUNTA 1",
resposta:"resposta1"
},

{
pergunta:"PERGUNTA 2",
resposta:"resposta2"
},

{
pergunta:"PERGUNTA 3",
resposta:"resposta3"
},

{
pergunta:"PERGUNTA 4",
resposta:"resposta4"
},

{
pergunta:"PERGUNTA 5",
resposta:"resposta5"
}

];

let etapa = 0;

const pergunta = document.getElementById("pergunta");
const resposta = document.getElementById("resposta");
const contador = document.getElementById("contador");
const mensagem = document.getElementById("mensagem");

function carregar(){

contador.textContent=`Memória ${etapa+1} de ${etapas.length}`;

pergunta.style.opacity=0;

setTimeout(()=>{

pergunta.textContent=etapas[etapa].pergunta;

pergunta.style.opacity=1;

mensagem.textContent="";

resposta.value="";

resposta.focus();

},180);

}

function verificar(){

let valor=resposta.value.trim().toLowerCase();

let correta=etapas[etapa].resposta.toLowerCase();

if(valor===correta){

mensagem.textContent="Memória encontrada.";

setTimeout(()=>{

etapa++;

if(etapa>=etapas.length){

finalizar();

}else{

carregar();

}

},600);

}else{

mensagem.textContent="Talvez exista outra resposta.";

resposta.value="";

}

}

function finalizar(){

document.querySelector(".info").style.display="none";

resposta.style.display="none";

contador.style.display="none";

mensagem.style.display="none";

pergunta.innerHTML=`

Cada passo levou a uma lembrança.

<br><br>

E cada lembrança trouxe você até aqui.

<br><br>

♡

<br><br>

Agora só falta encontrar o último detalhe.

`;

}

resposta.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

verificar();

}

});

carregar();
