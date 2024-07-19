alert('Seja bem vindo ao Site!')

var number = prompt('Digite um número!')

if (number >= 0) {
    alert('Seu número é positivo')
} else {
    alert('Seu número é negativo')
}




/*  FORMA DIFICIL


alert('Seja bem vindo ao Site!')

var number

while (true) {
    number = prompt('Digite um número')
    number = Number(number) // converte a entrada para um número

    if(!isNaN(number)){ // verifica se é um número válido
        break; // sai do loop se for um número válido
    } else {
        alert('Por favor, digite um número válido.') 
        // solicita novamente
    }

}

if (number >= 0) {
    alert('Seu número é positivo')
} else {
    alert('Seu número é negativo')
}

*/