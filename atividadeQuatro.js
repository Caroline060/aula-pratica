var teclado = require("prompt-sync")();
var fahrenheit = parseFloat(teclado("Digite a temperatura em \u00BAF: "));
var celsius = 9 / 5 * (fahrenheit - 32);
console.log("O valor da convers\u00E3o \u00E9: ".concat(celsius));
