function calcularTotal(precoUnitario, quantidade) {
    return precoUnitario * quantidade;
  }
  
  // Função para aplicar o desconto
  function aplicarDesconto(valorTotal) {
    if (valorTotal > 100) {
      return valorTotal * 0.9; // Desconto de 10%
    } else {
      return valorTotal; // Sem desconto
    }
  }
  
  // Função para exibir o resumo da compra
  function exibirResumo(){

  }
    // Lendo os dados do usuário
    let precoUnitario = parseFloat(prompt("Informe o preço unitário do produto:"));
    let quantidade = parseInt(prompt("Informe a quantidade comprada:"));
  
    // Calculando o valor total
    let valorTotal = calcularTotal(precoUnitario, quantidade);
  
    // Aplicando o desconto, se houver
    let valorFinal = aplicarDesconto(valorTotal);
  
    // Exibindo o resumo
    console.log("Resumo da Compra:");
    console.log("Valor total antes do desconto: R$ " + valorTotal.toFixed(2));
    console.log("Valor final com desconto: R$ " + valorFinal.toFixed(2));
  
  // Chamando a função para exibir o resumo
  exibirResumo();