let salario = parseFloat(prompt("Informe o salário inicial:"));
let ano = 1996;
let percentual = 0.0015;

while (ano <= 2025) {
  salario += salario * percentual;
  percentual *= 2;
  ano++;
}

console.log(`O salário atual em 2025 é: R$ ${salario.toFixed(2)}`);
