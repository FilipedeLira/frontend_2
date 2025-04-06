let n = parseInt(prompt("Quantos números você vai digitar?"));

let soma = 0;
let menor = null;
let maior = null;

for (let i = 1; i <= n; i++) {
  let numero = parseFloat(prompt(`Digite o ${i}º número:`));

  soma += numero;

  if (menor === null || numero < menor) {
    menor = numero;
  }

  if (maior === null || numero > maior) {
    maior = numero;
  }
}

console.log(`Menor valor: ${menor}`);
console.log(`Maior valor: ${maior}`);
console.log(`Soma dos valores: ${soma}`);
