console.log('Ola pessoas!');
console.log('4º Dia de #7DaysOfCode!');

const numero = 4;

const escolha = prompt('Tente acertar o número escolhido! Escolha um número de 1 a 10!');

const chances = 3;

function menosChances(chances) {
    return chances =- 1
}

if (escolha == numero) {
    alert('Você acertou! Parabéns!')
} else {
    while (chances != 0) {
        menosChances()
        alert(`Você errou! Tem mais ${chances} chances!`);
        escolha = prompt('Tente acertar o número escolhido! Escolha um número de 1 a 10!');
        
    } 
}

