var teclado = require("prompt-sync")();
var divisor = 2;
var dividendo = parseFloat(teclado("Digite o dividendo: "));
var resto = 0;
resto = dividendo % divisor;
if (resto == 0) {
    console.log("N\u00FAmero ".concat(dividendo, " par!"));
}
else if (resto == 1) {
    console.log("N\u00FAmero ".concat(dividendo, " impar!"));
}
else {
    console.log("Algo deu errado!");
}
