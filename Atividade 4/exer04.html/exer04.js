// Função para calcular o valor total da compra
function calcularTotal(precoUnitario, quantidade) {
    return precoUnitario * quantidade;
}
// Função para aplicar o desconto
function aplicarDesconto(valorTotal) {
    if (valorTotal > 100) {
        return valorTotal * 0.9; // Aplica 10% de desconto
    } else {
        return valorTotal; // Sem desconto
    }
}
// Função para exibir o resumo final da compra
function exibirResumo(precoUnitario, quantidade) {
    let valorTotal = calcularTotal(precoUnitario, quantidade);
    let valorComDesconto = aplicarDesconto(valorTotal);

    // Exibe o resumo
    console.log("Resumo da Compra:");
    console.log(`Valor total antes do desconto: R$ ${valorTotal.toFixed(2)}`);
    console.log(`Valor final com o desconto: R$ ${valorComDesconto.toFixed(2)}`);
}
exibirResumo(50, 3); // Exemplo com preço unitário de R$ 50,00 e quantidade de 3 produtos
