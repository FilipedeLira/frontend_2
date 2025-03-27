let nomes = ["Ana", "João", "Maria", "Carlos", "Luiza"];
console.log(nomes[2]); // Exibe "Maria"

// 2. Adicione um nome ao final e um no início do array.
nomes.push("Ricardo");  // Adiciona "Ricardo" no final
nomes.unshift("Pedro"); // Adiciona "Pedro" no início
console.log(nomes); // Exibe o array atualizado

// 3. Remova o último nome e exiba o array atualizado.
nomes.pop();  // Remove o último nome ("Ricardo")
console.log(nomes); // Exibe o array após a remoção

// 4. Use map() para criar um novo array dobrando os valores de [2, 4, 6, 8].
let numeros = [2, 4, 6, 8];
let numerosDobrados = numeros.map(num => num * 2);
console.log(numerosDobrados); // Exibe [4, 8, 12, 16]

// 5. Use filter() para criar um novo array apenas com números maiores que 5 em [1, 3, 5, 7, 9].
let numerosFiltrados = [1, 3, 5, 7, 9].filter(num => num > 5);
console.log(numerosFiltrados); // Exibe [7, 9]

