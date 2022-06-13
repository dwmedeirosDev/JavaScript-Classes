// ##### AULA 2 10.06.22 #####


// Condicionais IF e ELSE

// Verifica se uma expressão é verdadeira com o IF, e ELSE com o false

// IF e ELSE (normal)

// let possuiGraduacao = true;
// if(possuiGraduacao){
//     console.log("Possui faculdade");
// }else{
//     console.log("Não Possui faculdade");
// }


// ##### Exemplo 1 #####

// IF e ELSE (com ELSE IF)

// let maiorIdade = true;
// let estudandoProgramacao = true;
// if(maiorIdade){
//     console.log("É maior de idade");
// }
// else if(estudandoProgramacao){
//     console.log("Estudando programação");
// }
// else{
//     console.log("Foi tudo pra falso");
// }


// ##### Exemplo 2 #####

// let idade = 17;
// let corRoupa = "Branco";
// if(idade >= 18){
//     console.log("É maior de idade, então pode entrar na festa");
// }else if(corRoupa === "Preta"){
//     console.log("Está de preto então pode entrar");
// }else{
//     console.log("Po, não vai entrar hoje!");
// }


// ##########

//Operador lógico de Negação
// let maiorIdade = true;
// console.log(!maiorIdade);

// ##########



// ##### Operadores de Comparação: Vão sempre retornar um valor Booleano #####

// let valores = 20 > 50; // > (maior que)
// let valores = 20 < 50; // < (menor que)
// let valores = 15 >= 15; // >= (maior ou igual)
// let valores = 9 <= 10; // <= (menor ou igual);


// ##### Operadores de Comparação Level 2 ######
// == (verifica se é igual)
// === (verifica se é estritamente igual)

// let valores = 4 == "4"; // IGUAL
// let valores = 5 === "5"; // ESTRITAMENTE IGUAL

// let valores = 9 != "9"; // DIFERENTE
//let valores = 10 !== "10"; // // ESTRITAMENTE DIFERENTE
//console.log(valores);


// ##### Operadores lógicos &&: compara se uma expressão e a outra é verdadeira. #####
// let verificando = (false) && (2 + 2);
// console.log(verificando);

let idade = 18;
let corRoupa = "Preta";

if((idade >= 18) && (corRoupa === "Preta")){
    console.log("É maior de idade e está com a roupa preta, então pode entrar na festa");
}else{
    console.log("Não pode entrar na festa");
}

// ##### Operadores lógicos ||: Compara se uma expressão OU a outra é verdadeira #####
// let verificando = (10 >= 10) || (3 <= 2);
// console.log(verificando);


// let idade = 17;
// let corRoupa = "Preta";
// if((idade === 18) || (corRoupa === "Preta")){
//     console.log("É maior de idade e está com a roupa preta, então pode entrar na festa");
// }else{
//     console.log("Não pode entrar na festa");
// }

// ##### Criar uma condição que exiba uma mensagem no console se você #####

//Quando fizer aniversário em Janeiro OU Dezembro
let mes = "Dezembro";
if((mes === "Janeiro") || (mes === "Dezembro")){
    console.log("É Capricorniano");
}else{
    console.log("Outra coisa");
}