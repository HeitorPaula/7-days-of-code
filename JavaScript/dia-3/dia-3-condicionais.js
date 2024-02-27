console.log('Ola pessoas!');
console.log('3º Dia de #7DaysOfCode!');

// Criar os destinos possíveis de um jogo, em que o usuário consiga escolher!

const area = prompt('Por qual área você quer seguir, Front-End ou Back-End?');

if (area === "Front-End") {
    prompt('Você quer seguir na área de Front-End! Mas você quer aprender React ou Vue?')
};

if (area === "Back-End") {
    prompt('Você quer seguir na área de Back-End! Mas você quer aprender C# ou Java?')
};

prompt(`Você quer seguir se especializando em ${area}, ou continuar se desenvolvendi para se tornar Fullstack?`);

const tecnologias = prompt(`Tem mais alguma tecnologia que você gostaria de aprender?`)

while (tecnologias) {
    prompt(`Tem mais alguma tecnologia que você gostaria de aprender?`)
};

alert('Obrigado pela sua atenção!');
