document.getElementById('altura').addEventListener('input', function() {
    let altura = this.value;
    if (altura.length === 3) {
        this.value = (altura / 100).toFixed(2);
    }
});

function verificar() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    let fmasc = document.getElementById('masc')
    let ffem = document.getElementById('fem')
    let genero = ''
    let altura = document.getElementById('altura').value; 
    let peso = document.getElementById('peso').value;


    if (fmasc.checked) {
        genero = 'homem';
    } else if (ffem.checked) {
        genero = 'mulher';
    
    }

    let imc = peso / (altura ** 2)
    let palavraUma = genero == 'mulher' ? 'uma' : 'um'

    res.innerHTML = (`Olá ${nome}! Verificamos que você é ${palavraUma} ${genero} de ${idade} anos, 
    com ${altura}m de altura e ${peso}kg. Seu IMC é ${imc.toFixed(2)}.`)

    document.getElementById('divreset').removeAttribute('style')
}

function resetar() {
    document.getElementById('nome').value = '';
    document.getElementById('idade').value = '';
    document.getElementById('masc').checked = false;
    document.getElementById('fem').checked = false;
    document.getElementById('altura').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('res').innerHTML = '<p>O resultado aparecerá aqui</p>';
    document.getElementById('divreset').setAttribute('style', 'display: none;');

}