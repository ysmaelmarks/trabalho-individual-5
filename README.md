# Projeto Individual Módulo 5 Resilia

### Resumo
- O projeto individual 5 é uma ferramenta desenvolvida com Node.js com o módulo Readline.
- Seu propósito é auxiliar o desenvolvedor front-end, organizando por ordem alfabética
as propriedades do CSS.


### Instalação
```sh
- git clone https://github.com/ysmaelmarks/trabalho-individual-5.git
- node script.js
```

### Observações
- O módulo Readline utilizado no código é uma ferramenta nativa do Node.js, devido a isto,
não é necessário qualquer outra instalação de biblioteca. Vale a pena mencionar que o
método prompt(), nativo dos browsers, através do "window", não é nativo do Node.js. Em vista disto,
torna-se indispensável utilizar uma biblioteca para contornar o problema de ler inputs do usuário
diretamente no terminal. 
- Durante o desenvolvimento do trabalho, me deparei com alguns problemas relacionados ao que foi pedido
no trabalho, o código rodando em laço de repetição. Devido ao anteriormente mencionado, optei por utilizar
um stream de dados assíncrono.
- No mas, o código preenche todas as necessidades do trabalho individual, recebendo dados diretamente no terminal até
a receber um "sair" e imprimindo em ordem alfabética.
