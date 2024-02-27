console.log('Ola pessoas!');
console.log('2º Dia de #7DaysOfCode!');

// Explicação / Contexto

// Pedir ao usúario responder 3 perguntas:

// - Qual o seu nome?
// - Quantos anos você tem?
// - Qual linguagem de programação você está estudando?

// Ao final exibir a mensagem: 
// "Olá [nome], você tem [idade] anos e já está aprendendo [liguagem]!"

const perguntaNome = prompt('Qual é o seu nome?');
const perguntaIdade = prompt('Quantos anos você tem?');
const perguntaLinguagem = prompt('Qual linguagem de programação você está estudando?');
const perguntaGosto = prompt(`Você gosta de estudar ${perguntaLinguagem}? Se sim, digite 1, se não digite 2!`);


const resposta = `Olá ${perguntaNome}, você tem ${perguntaIdade} anos e já está aprendendo ${perguntaLinguagem}!`;

alert(resposta);

if (perguntaGosto == 1) {
    alert(`Que bom que você está estudando ${perguntaLinguagem}! Continue estudando e você terá muito sucesso.`)   
};

if (perguntaGosto == 2) {
    alert ('Ahh que pena... Já tentou aprender outras linguagens?')
};

