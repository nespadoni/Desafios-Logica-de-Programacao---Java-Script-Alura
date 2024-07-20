let valorTotal = 0;
document.getElementById('lista-produtos').innerHTML = '';

function adicionar() {
    // calcular o preço, o nosso subtotal
    // atualizar o valor total
    // Recupar valores nome do produto, quantidade e valor

    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidadeProduto = document.getElementById('quantidade').value;
    let preco = valorUnitario * quantidadeProduto;

    // Adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidadeProduto}</span> ${nomeProduto} 
          <span class="texto-azul"> - R$${preco}</span> </section>`

    valorTotal = valorTotal + preco;
    let campoTotal = document.getElementById('valor-total')
    campoTotal.textContent = `R$ ${valorTotal}`;

    document.getElementById('quantidade').value = 0; 
    
    // Aparece o Total
    document.getElementById('carrinho-total').removeAttribute('style')

}


function limpar() {
    // Limpar o carrinho
    document.getElementById('lista-produtos').innerHTML = '';
    // Resetar o valor total e desaparece o paragráfo
    document.getElementById('carrinho-total').setAttribute('style', 'display: none;')
}
