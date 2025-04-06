function calcularCirculo() {
  let raio = parseFloat(prompt("Informe o raio do círculo:"));
  const pi = Math.PI;

  let area = pi * raio * raio;
  let perimetro = 2 * pi * raio;

  console.log(`Raio: ${raio}`);
  console.log(`Área do círculo: ${area.toFixed(2)}`);
  console.log(`Perímetro do círculo: ${perimetro.toFixed(2)}`);
}

calcularCirculo();
