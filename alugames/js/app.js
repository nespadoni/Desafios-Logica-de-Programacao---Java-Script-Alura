function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')
    || botao.classList.contains('dashboard__item__button--return')) {
        if (confirm(`Você tem certeza que deseja devolver ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            alert(`Você devolveu ${nomeJogo.textContent}!`)
        } else {
            alert(`Você desistiu de devolver ${nomeJogo.textContent}! Aproveite o jogo!`)
        }

    } else {
        if (confirm(`Você tem certeza que deseja alugar ${nomeJogo.textContent}?`)) {
            imagem.classList.add('dashboard__item__img--rented');
            botao.classList.add('dashboard__item__button--return');
            botao.textContent = 'Devolver';
            alert(`Você alugou ${nomeJogo.textContent}! Aproveite o jogo!`)
        } else {
            alert(`Você desistiu de alugar ${nomeJogo.textContent}!`)
        }
    }
}
