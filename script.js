let SUMA = 0;
let NUMERO = 2;
let modificador = 2

while (NUMERO < 1000) {
    SUMA = NUMERO + SUMA;
    NUMERO = NUMERO + modificador;
    console.log (`El numero es ${NUMERO} y la suma es ${SUMA}`);
}