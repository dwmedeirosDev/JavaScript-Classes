// ##### AULA 4 15.06.22 #####

//  Bloco de código que pode ser executada e utilizada.

// Primeiro declarar a função; Nome da função com parâmetro

function mensagem(){
    console.log("Primeira vez com function!");
}

// Ativar função]
mensagem();


// ###################################################################


// Function com parâmetro

// Parâmetro
function mostrarNome(nome){
    console.log("Seu nome é:", nome);
}

// Argumentos
mostrarNome("David");
mostrarNome("Fernanda");
mostrarNome("Leonardo");
mostrarNome("Mariana");
mostrarNome("Luan");


// Outro exemplo, agora com return

function soma(numero1, numero2){
    return numero1 + numero2;
}
console.log(soma(13, 20));


// Exemplo com return

function double(number){
    return number * 2

}

console.log(double(50));
console.log(double(100));


// Exemplo com return

function areaQuadrado(lado){
    return lado * lado;
}

console.log("Sua área total é de: ", areaQuadrado(10));

// Exemplo com return

function pi(){
    return 3.14;
}

let resultado = 5 * pi();
console.log(resultado); 