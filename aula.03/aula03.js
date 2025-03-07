const pessoas = [
    { altura: 1.75, genero: "Masculino" },
    { altura: 1.60, genero: "Feminino" },
    { altura: 1.82, genero: "Masculino" },
    { altura: 1.70, genero: "Feminino" },
    { altura: 1.90, genero: "Masculino" },
    { altura: 1.55, genero: "Feminino" },
    { altura: 1.68, genero: "Masculino" },
    { altura: 1.73, genero: "Masculino" },
    { altura: 1.85, genero: "Masculino" },
    { altura: 1.60, genero: "Feminino" },
    { altura: 1.78, genero: "Masculino" },
    { altura: 1.65, genero: "Feminino" },
    { altura: 1.72, genero: "Feminino" },
    { altura: 1.88, genero: "Masculino" },
    { altura: 1.59, genero: "Feminino" }
];
let alturas = pessoas.map(p => p.altura);
let maiorAltura = Math.max(...alturas);
let menorAltura = Math.min(...alturas);

let homens = pessoas.filter(p => p.genero === "Masculino");
let mediaHomens = homens.reduce((soma, p) => soma + p.altura, 0) / homens.length;

let mulheres = pessoas.filter(p => p.genero === "Feminino").length;

console.log("Maior altura:", maiorAltura);
console.log("Menor altura:", menorAltura);
console.log("Média altura dos homens:", mediaHomens.toFixed(2));
console.log("Número de mulheres:", mulheres);