let teclado = require (`prompt-sync`)();

let celsius: number = parseFloat(teclado(`Digite a temperatura em ºC: `));

let fahrenheit: number = (celsius * (9/5)) + 32;

console.log (`O valor da conversão é: ${fahrenheit}`);