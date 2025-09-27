// 1) Crie um array com 5 nomes e exiba o terceiro nome
let nomes = ["Ana", "Carlos", "Maria", "João", "Paula"];
console.log("Terceiro nome:", nomes[2]); // Lembrando que começa do índice 0

// 2) Adicione um nome ao final e um no início do array
nomes.push("Fernanda");   // adiciona no final
nomes.unshift("Roberto"); // adiciona no início
console.log("Array após adições:", nomes);

// 3) Remova o último nome e exiba o array atualizado
nomes.pop();
console.log("Array após remover o último:", nomes);

// 4) Use map() para dobrar os valores de [2, 4, 6, 8]
let numeros = [2, 4, 6, 8];
let dobrados = numeros.map(num => num * 2);
console.log("Valores dobrados:", dobrados);

// 5) Use filter() para criar um novo array apenas com números maiores que 5
let valores = [1, 3, 5, 7, 9];
let maioresQue5 = valores.filter(num => num > 5);
console.log("Maiores que 5:", maioresQue5);