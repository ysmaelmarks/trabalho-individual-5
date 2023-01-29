const properties = [];
process.stdout.write("Insira uma propriedade do CSS ou 'SAIR' para sair:");
process.stdin.on('data', (input) => {
  const property = input.toString().trim();
  if (property === 'SAIR') {
    process.exit();
  } else {
    properties.push(property);
    process.stdout.write("Insira uma propriedade do CSS ou 'SAIR' para sair:");
  }
});

process.on('exit', () => {
  properties.sort();
  console.log("Organizando propriedades do CSS...");
  properties.forEach(property => console.log(property));
});