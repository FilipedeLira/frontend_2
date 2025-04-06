function calcularMontante() {
    // Coleta de dados do usuário
    let capital = parseFloat(prompt("Informe o capital inicial investido (em R$):"));
    let taxa = parseFloat(prompt("Informe a taxa de juros mensal (em %):"));
    let tempo = parseInt(prompt("Informe o tempo do investimento (em meses):"));
  
    // Conversão da taxa de percentual para decimal
    let taxaDecimal = taxa / 100;
  
    let montante = capital * Math.pow((1 + taxaDecimal), tempo);
  
    alert("O montante ao final do investimento será de R$ " + montante.toFixed(2));
  }
  
  calcularMontante();
  



