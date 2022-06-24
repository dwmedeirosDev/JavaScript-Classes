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

// let alunos = ["Rômulo", "David", "Paula", "Gustavo", "Luciano"]; 
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

// ######################################################################

// Objeto - Conjunto de variáveis e funções que são chamados de propriedades e métodos

// ##### Estrutura do objeto #####
// const objetoTeste = {
//     chave: valor
// };

// const pessoa = {
//     Nome: "David",
//     Idade: 28,
//     Profissao: "TI"
// }

// console.log(pessoa);

// pessoa.time = "Flamengo"; 
// pessoa.telefone = 982916501;

// // delete pessoa.telefone; // Deletar

// console.log(pessoa.Nome);
// console.log(pessoa.Idade);
// console.log(pessoa.Profissao)
// console.log(pessoa.time)
// console.log(pessoa.telefone)

// ######################################################################

// Array com objetos Verificar

// const geral = [
//     {
//         nome: "David",
//         idade: 28,
//         tecnologias: ["HTML", "CSS", "JavaScript"]
//     },
//     {
//         nome: "Teste",
//         idade: "Teste",
//         tecnologias: "Teste"
//     }
// ]

// console.log(geral[0]);
// console.log(geral[1].nome);


// ########## REVISÃO MARIANA - 24.06.22 ##########


//Array é uma lista de dados, representado por colchetes - []

//Index ou Índice - Começa a partir do 0

let meses = ["Janeiro", "Fevereiro", "Março"];
let numeros = [1, 3, 4, 7];
let random = ["Janeiro", 1, "Fevereiro", 3];

console.log(meses);
console.log(meses[2]);

// () - Se chama método

// unshift() - Adicionar um valor no INÍCIO de uma array

let paises = ["Portugal", "Alemanha", "Grécia"];
paises.unshift("México");
console.log(paises);

// push() - Adicionar um valor no FINAL de uma array

let estados = ["São Paulo", "Bahia"];
estados.push("Rio de Janeiro");
console.log(estados);

// shift() - Remover o PRIMEIRO valor da array

let nomes = ["Paula", "Mariana", "Marcos", "Alê"];
nomes.shift();
console.log(nomes);

// pop() - Remover o ÚLTIMO valor da array

let bairros = ["Santa Cruz", "Bonsucesso", "Magalhães Bastos"];
bairros.pop();
console.log(bairros);

// splice() - Adiciona, remove ou substitui o valor em específico da array

// ADICIONAR - Splice(x, y, "Valor a ser adicionado")
// x - Índice do elemento a ser adicionado
// y - Quantidade de elementos a serem adicionado ( Sempre 0 )

let aprovados = ["Alê", "Paula", "Hélio"];
aprovados.splice(2, 0, "David");
console.log(aprovados);


// REMOVER - Splice(x, y)
// x - Índice do elemento a ser removido
// y - Quantidade de elementos a serem removidos

let tec = ["JavaScript", "Java", "C++", "Python"];
tec.splice(2, 1);
console.log(tec);

// SUBSTITUIR - Splice(x, y, "Valor a ser substituído")
// x - Índice do elemento a ser substituído
// y - Quantidade de elementos a serem substituído ( Sempre 1 )

let doces = ["Pé de Moleque", "Paçoca", "Maça do amor", "Milho"];
doces.splice(3, 1, "Doce de leite");
console.log(doces);

// sort() - Método para organizar em ordem alfabética ou numérica
// Ordem alfabética

let names = ["Paula", "Mari", "Hélio", "David"];
names.sort();
console.log(names)
// Ou
console.log(names.sort())

// Ordem numérica

let numbers = [2, 4, 140, 60, 88];
numbers.sort(function(a, b){
    return(a - b)
})
console.log(numbers)

// ######################################################################

// Objetos - Coleção de dados, representados por {}

// Variável nome = {p
//     propriedade: valor,
//     propriedade: valor
// }

let dados = {
    nome: "David",
    idade: 28,
    Time: "Flamengo"
}
console.log(dados)

// Visualizar algo em específico dentro de um objeto

console.log(dados.nome)

// Outro exemplo

let data = [{
    nome: "David",
    idade: 28,
    Time: "Flamengo"
},
{
    nome: "David",
    idade: 28,
    Time: "Flamengo"
},
{
    nome: "David",
    idade: 28,
    Time: "Real Madrid"
}]

console.log(data[2].Time)

// Outro exemplo adicionado nova propriedade na variável

let login = {
    nome: "Luan",
    idade: 19
}

login.time = "Vasco da Gama"
console.log(login);

// Outro exemplo removendo a propriedade na variável

delete login.time
console.log(login);

// Outro exemplo substituindo a propriedade na variável

login.nome = "Mari"
console.log(login)