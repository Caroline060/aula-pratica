var teclado = require("prompt-sync")();
var celsius = parseFloat(teclado("Digite a temperatura em \u00BAC: "));
var fahrenheit = (celsius * (9 / 5)) + 32;
console.log("O valor da convers\u00E3o \u00E9: ".concat(fahrenheit));
