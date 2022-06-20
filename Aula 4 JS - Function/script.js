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


// ##### EXEMPLOS DE FUNCTION NA AULA 05 20.06.22 #####

// Primeira função com For Loop

// function incrementar(numero){
//     for(let contador = numero; contador <= 10; contador++){
//         console.log(contador);

//     }
// }

// incrementar(2);


// Segunda função com Condicionais

// Média 

// function media(prova1, prova2){
//     const notaFinal = (prova1 + prova2) / 2;
//     if (notaFinal >= 9){
//         console.log(`Sua nota foi ${notaFinal} - MB ( Muito bom )`)
//     }else if(notaFinal >= 7 && notaFinal < 9){
//         console.log(`Sua nota foi ${notaFinal} - B ( Boa )`);
//     }else if(notaFinal >= 6 && notaFinal < 7){
//         console.log(`Sua nota foi ${notaFinal} - R ( Regular )`);
//     }
//     else{
//         console.log(`Sua nota foi ${notaFinal} - I ( Insuficiente )`);
//     }
// }

// media(6, 10);
// media(2, 2);
// media(10, 10);