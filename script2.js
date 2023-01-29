const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let cssProperties = [];
let answer = '';

do {
  rl.question('Digite uma propriedade CSS ou SAIR para finalizar: ', (input) => {
    answer = input;
  });
  if (answer.toLowerCase() !== 'sair') {
    cssProperties.push(answer);
  }
} while (answer.toLowerCase() !== 'sair');

console.log('Propriedades CSS:');
cssProperties.sort().forEach((prop) => console.log(prop));
rl.close();