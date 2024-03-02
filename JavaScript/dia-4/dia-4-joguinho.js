console.log('Ola pessoas!');
console.log('4º Dia de #7DaysOfCode!');

// Sem número randômico

/*
const numero = 4;

const escolha = "";

const acertou = false;

for (let contador = 0; contador < 3; contador++) {
    chute = prompt("Tente advinhar o número de 0 a 10:");
    if (chute == numero) {
        alert(`Parabéns, você acertou! O número era ${numero}.`);
        acertou = true;
        break;
    }
    alert("Errado!");
}

if (!acertou) {
    alert(`Infelizmente, você não acertou. O número era ${numero}!`);
}
*/

// Com número randômico

const numero = Math.floor(Math.random() * (10 - 0 + 1) + 0);

const escolha = "";

const acertou = false;

for (let contador = 0; contador < 3; contador++) {
    chute = prompt("Tente advinhar o número de 0 a 10:");
    if (chute == numero) {
        alert(`Parabéns, você acertou! O número era ${numero}.`);
        acertou = true;
        break;
    }
    alert("Errado!");
}

if (!acertou) {
    alert(`Infelizmente, você não acertou. O número era ${numero}!`);
}
