let teclado = require (`prompt-sync`)();

let fahrenheit: number = parseFloat(teclado(`Digite a temperatura em ºF: `));

let celsius: number = 9/5 * (fahrenheit - 32);

console.log (`O valor da conversão é: ${celsius}`);