// Ligar e Desligar a Luz

const on = document.querySelectorAll(".interruptor[0]")
const off = document.querySelectorAll(".interruptor[1]")

function onLight(){
    document.body.style.backgroundColor = "white";
}

function offLight(){
    document.body.style.backgroundColor = "black";
}

// #######################################################

const list = document.querySelectorAll(".test");
const btn = documento.querySelectorAll(".conteiner-button button");

function openInformation(){
    list[0].innerText = "Funcionou"
    list[1].innerText = "Funcionou"
    list[2].innerText = "Funcionou"
    btn.innerText = "Funcionou";    
}