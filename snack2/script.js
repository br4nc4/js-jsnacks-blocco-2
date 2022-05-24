const listNomi = ["Giuseppe", "Davide", "Francesco", "Anna", "Giampiero", "Fabio"];
const listCognomi = ["Brancaleon", "Losciale", "Milanesi", "Brambilla", "Bernazzani", "Taffari"];
const nomeCompleto = [];

const randomNomi = Math.floor(Math.random()*listNomi.length);
console.log(listNomi[randomNomi]);

const randomCognomi = Math.floor(Math.random()*listCognomi.length);
console.log(listCognomi[randomCognomi]);

nomeCompleto.push(listNomi[randomNomi].toString() + listCognomi[randomCognomi].toString());

console.log(nomeCompleto);