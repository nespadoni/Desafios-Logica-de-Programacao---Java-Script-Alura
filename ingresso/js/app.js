function comprar() {

    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtdEscolhida = document.getElementById('qtd').value;
    let qtdPista = document.getElementById('qtd-pista');
    let qtdSup = document.getElementById('qtd-superior');
    let qtdInf = document.getElementById('qtd-inferior');

    let dispPista = 100;
    let dispSup = 200;
    let dispInf = 400;
 
    if (tipoIngresso == 'pista') {
        dispPista = Math.max((qtdPista.textContent - qtdEscolhida), 0);
        qtdPista.innerHTML = dispPista
        if (dispPista != qtdEscolhida ) {
            alert(`ERRO: Há apenas ${dispPista} Pista disponível`);
        }
    } else if (tipoIngresso == 'superior') {
        dispSup = Math.max((qtdSup.textContent - qtdEscolhida), 0);
        qtdSup.innerHTML = dispSup
        if (dispSup != qtdEscolhida ) {
            alert(`ERRO: Há apenas ${dispSup} Cadeiras Superiores disponíveis`);
        }
    } else if (tipoIngresso == 'inferior') {
        dispInf = Math.max((qtdInf.textContent - qtdEscolhida), 0);
        qtdInf.innerHTML = dispInf
        if (qtdEscolhida > dispInf) {
            alert(`ERRO: Há apenas ${dispInf} ingressos inferiores disponíveis`);
        } else {
            alert(`Você comprou ${qtdEscolhida} ingressos`);
        }
    }
}