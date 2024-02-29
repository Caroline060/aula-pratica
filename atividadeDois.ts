const teclado = require (`prompt-sync`)();

let nUm: number = parseFloat(teclado(`Digite o primeiro número: `));
let nDois: number = parseFloat(teclado(`Digite o segundo número: `));
let nTres: number = parseFloat(teclado(`Digite o terceiro número: `));
let nQuatro: number = parseFloat(teclado(`Digite o quarto número: `));
let nCinco: number = parseFloat(teclado(`Digite o quinto número: `));
let nSeis: number = parseFloat(teclado(`Digite o sexto número: `));
let nSete: number = parseFloat(teclado(`Digite o sétimo número: `));
let nOito: number = parseFloat(teclado(`Digite o oitavo número: `));
let nNove: number = parseFloat(teclado(`Digite o nono número: `));
let nDez: number = parseFloat(teclado(`Digite o décimo número: `));

let media: number = (nUm+nDois+nTres+nQuatro+nCinco+nSeis+nSete+nOito+nNove+nDez/10)

console.log(`Média é ${media}`)