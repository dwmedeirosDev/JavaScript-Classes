// ##### AULA 6 22.06.22 #####

// Array - Serve para armazenar diferentes valores na variável

// Métodos e Propriedades

// let nome = ["Paula", "Rômulo", "David"];
// console.log(nome);
// console.log(nome[1]); // Pegar um elemento específico

// for(let itens = 0; itens < nome.length; itens++){
//     console.log(`Elemento de index ${nome[itens]}`)
// }

// ######################################################################

// Métodos SORT()

// let alunos = ["Rômulo", "David", "Paula", "Gustavo", "Luciano"]; 
// console.log(alunos.length) // Quantidade de Array
// console.log(alunos) // Mostra todas as Array

//SORT() - Coloca os elementos em ordem alfabética ou numperica

// console.log("Ordem alfabética:", alunos.sort());

// let numeros = [2, 1, 5, 3, 6, 0];
// console.log(numeros);
// console.log("Números em ordem numérica:", numeros.sort());

// ##############

// let number = [12, 34, 54, 64, 101];
// let resultado = number.sort(function(a, b){
//     return a - b
// });
// console.log("Ordem correta dos números com 3 casas ou mais:", resultado);

// ######################################################################

// Método unshift() - Adiciona no começo da lista

let alunos = ["Rômulo", "David", "Paula", "Gustavo", "Luciano"]; 
// alunos.unshift("Alessandra");
// console.log(alunos);

// Método shift() - Remover o primeiro da lista

// alunos.shift();
// console.log(alunos)

// Método push() - Adiciona no final da lista

// alunos.push("Ana Gomes");
// console.log(alunos)

// Método pop() - Remove o último da lista

// alunos.pop();
// console.log(alunos);

// Método splice() - Remove, adiciona ou substitui

// alunos.splice(1, 2); // 1: Primeiro número é de onde começa, e o 2: segundo número quantos eu quero remover
// console.log(alunos);

// alunos.splice(0, 0, "Franciane"); // Para adicionar basta passar o valor "0, 0"
// console.log(alunos);

// alunos.splice(1, 1, "Teste"); // 1: Primeiro número qual posição, e 1: segundo número quantidades de itens logo em seguida colocar o nome
// console.log(alunos);