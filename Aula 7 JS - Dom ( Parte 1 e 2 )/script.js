// // ##### AULA 7 27.06.22 #####

// // Crie um array que receba 5 itens e exiba no console.

// let tecnologias = ["JavaScript", "CSS", "HTML", "React", "TypeScript"];
// console.log("Array que exiga as tecnologias", tecnologias)

// // Utilize um método para adicionar um nome ao inicio do array.

// tecnologias.unshift("NextJS")
// console.log("Adicionando uma tecnologia no início", tecnologias)

// // Utilize um método para remover o último nome do array.

// tecnologias.pop()
// console.log("Removendo a ultima tecnologia", tecnologias)

// // Utilize um método para adicionar dois nomes ao fim do array.

// tecnologias.push("SasS", "VueJS")
// console.log("Adionando ao final 2 tecnologias", tecnologias)

// // Utilize um método para remover o primeiro nome do array.

// tecnologias.shift()
// console.log("Removendo a primeira tecnologia:", tecnologias)

// // Utilize um método para organizar em ordem crescente o seguinte array:

// let number = [2, 9, 8, 4, 5]
// console.log(number)
// console.log("Número em ordem numérica:", number.sort());

// ############################################################################################

// Manipulação do DOM 
// Document Object Model

// console.log(window.alert("Bem Vindo(a)"))

// console.log(window.prompt("Qual seu nome?"))

// window.alert("Seja bem-vindo(a)");

// let nome = window.prompt("Qual é o seu nome?");

// window.alert(`Bem vindo(a), ${nome}`);

// console.log("Aqui é o window", window);
// console.log("Aqui é o document", document);

// document.body.style.backgroundColor = "purple";


// ##### SEGUNDA AULA DE DOM 29.06.22 #####

// Entender como capturar os elementos através da árvore DOM pelo JS


// getElementById() - Pegar o elemento pelo ID

// const texto = document.getElementById("paragrafo");
// console.log("Com ID:", texto);

// // Apenas o texto
// console.log(texto.innerText);


// // getElementyByClassName() - Pegar o elemento pela class e retornar um HTMLCollection

// const itens = document.getElementsByClassName("lista");
// console.log("Com ClassName:", itens);

// // Pegar o elemento em específico

// console.log(itens[0]); // Verificar ###################

// // Pegar todos os elementos

// const transformando = Array.from(itens);
// console.log(transformando)


// // getElementsByTagName() - Pegar o elemenento pela tag

// const alunos = document.getElementsByTagName("ol")[0];
// console.log("Com TagName:", alunos);


// // Seletor Geral Único

// // querySelector

// const titulo = document.querySelector(".title");
// console.log(titulo);

// // Apenas o texto
// console.log(titulo.innerText);

// // querySelectorAll

// const all = document.querySelectorAll(".title");
// console.log(all);

// // Apenas o texto
// console.log(all.innerText);